import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { OFFER, formatUSD } from "@/lib/offer";
import { cryptoProvider, stripe } from "@/lib/stripe";
import { TAGS, addNote, addTags, createWonOpportunity, removeTags, upsertContact } from "@/lib/ghl";

/**
 * Stripe -> GHL. When a course payment succeeds, the buyer is tagged in GHL.
 * The GHL "Course Access" workflow triggers on the `course-purchased-web` tag
 * and emails the course access link.
 */
export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = req.headers.get("stripe-signature");
  if (!secret || !signature) return NextResponse.json({ error: "Missing signature" }, { status: 400 });

  const payload = await req.text();
  let event: Stripe.Event;
  try {
    event = await stripe().webhooks.constructEventAsync(payload, signature, secret, undefined, cryptoProvider);
  } catch (err) {
    console.error("Stripe signature check failed:", err);
    return NextResponse.json({ error: "Bad signature" }, { status: 400 });
  }

  if (event.type !== "checkout.session.completed" && event.type !== "checkout.session.async_payment_succeeded") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  if (session.metadata?.sku !== OFFER.sku) return NextResponse.json({ received: true, skipped: "other product" });
  if (session.payment_status !== "paid") return NextResponse.json({ received: true, pending: true });

  const email = session.customer_details?.email || session.customer_email;
  if (!email) return NextResponse.json({ error: "No email on session" }, { status: 400 });

  const fullName = session.customer_details?.name || "";
  const firstName = session.metadata?.first_name || fullName.split(" ")[0] || undefined;
  const phone = session.metadata?.phone || session.customer_details?.phone || undefined;
  const total = (session.amount_total ?? 0) / 100;
  const coupon = session.metadata?.coupon || "none";

  try {
    const contactId = await upsertContact({ email, firstName, phone, source: "Course Page (Next.js)" });
    // Adding the tag is what fires the GHL access workflow.
    await addTags(contactId, [TAGS.purchased, TAGS.buyer]);
    await removeTags(contactId, [TAGS.checkoutStarted]).catch(() => undefined);
    await addNote(
      contactId,
      [
        `Purchased: ${OFFER.name}`,
        `Paid: ${formatUSD(session.amount_total ?? 0)} (coupon: ${coupon})`,
        `Stripe checkout session: ${session.id}`,
        session.payment_intent ? `Stripe payment: ${String(session.payment_intent)}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    );
    await createWonOpportunity(contactId, `${OFFER.name} - ${fullName || email}`, total).catch((e) =>
      console.error("Opportunity create failed:", e),
    );
  } catch (err) {
    // Returning 500 makes Stripe retry the webhook automatically (for up to 3 days).
    console.error("GHL sync failed:", err);
    return NextResponse.json({ error: "GHL sync failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
