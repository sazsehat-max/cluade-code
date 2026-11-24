import { NextResponse } from "next/server";
import { OFFER, quote } from "@/lib/offer";
import { ensureStripeCoupon, siteUrl, stripe } from "@/lib/stripe";
import { TAGS, addTags, upsertContact } from "@/lib/ghl";

type Body = { firstName?: string; email?: string; phone?: string; code?: string; utm?: Record<string, string> };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as Body;
  const firstName = (body.firstName ?? "").trim().slice(0, 80);
  const email = (body.email ?? "").trim().toLowerCase().slice(0, 200);
  const phone = (body.phone ?? "").trim().slice(0, 40);

  if (!firstName) return NextResponse.json({ error: "Enter your first name." }, { status: 400 });
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "Enter a valid email so we can send your course access." }, { status: 400 });

  // Price is always decided here on the server, never trusted from the browser.
  const q = quote(body.code);
  if (!q) return NextResponse.json({ error: "That code isn't valid. Remove it or try another." }, { status: 400 });

  // 1) Save the lead in GHL first, so an abandoned-checkout workflow can follow up.
  let contactId = "";
  try {
    contactId = await upsertContact({ firstName, email, phone: phone || undefined, source: "Course Page (Next.js)" });
    await addTags(contactId, [TAGS.checkoutStarted]);
  } catch (err) {
    console.error("GHL lead capture failed (continuing to checkout):", err);
  }

  // 2) Create the Stripe Checkout session.
  const utm = Object.fromEntries(
    Object.entries(body.utm ?? {})
      .filter(([k]) => /^utm_(source|medium|campaign|content|term)$|^fbclid$/.test(k))
      .map(([k, v]) => [k, String(v).slice(0, 200)]),
  );
  try {
    const origin = siteUrl(req);
    const discounts = q.code ? [{ coupon: await ensureStripeCoupon(q.code, q.percentOff) }] : undefined;
    const session = await stripe().checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      customer_creation: "always",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: OFFER.currency,
            unit_amount: q.listPriceCents,
            product_data: { name: OFFER.name, description: OFFER.description },
          },
        },
      ],
      discounts,
      metadata: {
        sku: OFFER.sku,
        first_name: firstName,
        phone,
        coupon: q.code ?? "",
        ghl_contact_id: contactId,
        ...utm,
      },
      payment_intent_data: { metadata: { sku: OFFER.sku, coupon: q.code ?? "" } },
      success_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?checkout=canceled${q.code ? `&code=${encodeURIComponent(q.code)}` : ""}#enroll`,
    });
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout session failed:", err);
    return NextResponse.json({ error: "Checkout couldn't start. Try again in a moment." }, { status: 502 });
  }
}
