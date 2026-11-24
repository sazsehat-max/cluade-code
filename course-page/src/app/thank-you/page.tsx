/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { BRAND } from "@/lib/content";
import { OFFER, formatUSD } from "@/lib/offer";
import { stripe } from "@/lib/stripe";
import PurchasePixel from "./PurchasePixel";

export const metadata: Metadata = { title: "You're in | Market Titans", robots: { index: false } };
export const dynamic = "force-dynamic";

async function getSession(id?: string) {
  if (!id || !id.startsWith("cs_")) return null;
  try {
    const s = await stripe().checkout.sessions.retrieve(id);
    if (s.metadata?.sku !== OFFER.sku || s.payment_status !== "paid") return null;
    return {
      id: s.id,
      firstName: s.metadata?.first_name || s.customer_details?.name?.split(" ")[0] || "",
      email: s.customer_details?.email || s.customer_email || "",
      total: s.amount_total ?? 0,
    };
  } catch {
    return null;
  }
}

export default async function ThankYou({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id } = await searchParams;
  const session = await getSession(session_id);

  return (
    <main className="ty">
      <div className="wrap ty__in">
        <img src={BRAND.logo} alt="Market Titans" width={120} height={96} className="ty__logo" />
        <p className="eyebrow">{session ? "Payment received" : "Thanks for enrolling"}</p>
        <h1 className="h2 ty__h">
          {session?.firstName ? `You're in, ${session.firstName}.` : "You're in."} <span className="red">Check your email.</span>
        </h1>
        <p className="lede ty__lede">
          Your course login and Telegram invite are on their way to{" "}
          {session?.email ? <b>{session.email}</b> : "the email you used at checkout"}. They usually arrive within a few minutes.
        </p>
        <ol className="ty__steps">
          <li>
            <b>Open the access email</b> from Market Titans and log in to the course.
          </li>
          <li>
            <b>Join the Telegram room</b> with the invite link, so you get the daily pre-market watchlist.
          </li>
          <li>
            <b>Start Module 1</b> today. Block an hour on your calendar right now.
          </li>
        </ol>
        <p className="ty__help">
          No email after 10 minutes? Check spam and promotions, then reply to any Market Titans email and we&rsquo;ll sort it out.
        </p>
        {session ? (
          <p className="ty__receipt">
            Receipt: {formatUSD(session.total)} · {OFFER.name}
          </p>
        ) : null}
        {session ? <PurchasePixel value={session.total / 100} eventId={session.id} /> : null}
      </div>
    </main>
  );
}
