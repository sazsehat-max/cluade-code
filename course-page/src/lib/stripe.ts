import Stripe from "stripe";

let client: Stripe | null = null;

/** Stripe client that runs on Cloudflare Workers (fetch-based HTTP, no Node http module). */
export function stripe(): Stripe {
  if (client) return client;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY must be set");
  client = new Stripe(key, { httpClient: Stripe.createFetchHttpClient() });
  return client;
}

export const cryptoProvider = Stripe.createSubtleCryptoProvider();

/**
 * Makes sure a Stripe coupon exists for a funnel code, so Stripe Checkout shows
 * the list price, the code and the discount line. The id includes the percent,
 * so changing a code's percent in config simply creates a new coupon.
 */
export async function ensureStripeCoupon(code: string, percentOff: number): Promise<string> {
  const s = stripe();
  const id = `MT_${code}_${percentOff}`.replace(/[^A-Za-z0-9_-]/g, "");
  try {
    const existing = await s.coupons.retrieve(id);
    if (existing.valid) return id;
    throw new Error(`Stripe coupon ${id} exists but is no longer valid`);
  } catch (err) {
    if (!(err instanceof Stripe.errors.StripeInvalidRequestError) || err.code !== "resource_missing") throw err;
  }
  await s.coupons.create({ id, percent_off: percentOff, duration: "once", name: `${code} (${percentOff}% off)` });
  return id;
}

export function siteUrl(req: Request): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || new URL(req.url).origin).replace(/\/$/, "");
}
