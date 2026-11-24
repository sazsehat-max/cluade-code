/**
 * GHL checkout mode (no Stripe key needed).
 * Each coupon code maps to its own GHL order page, priced at the discounted amount.
 * Set CHECKOUT_LINKS on Cloudflare as JSON, e.g.
 *   {"default":"https://course-offer.demarkettitans.com/course-checkout",
 *    "TITAN25":"https://course-offer.demarkettitans.com/course-checkout-titan25"}
 */
export function getCheckoutLinks(): Record<string, string> {
  const raw = process.env.CHECKOUT_LINKS;
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const out: Record<string, string> = {};
    for (const [k, v] of Object.entries(parsed)) {
      if (typeof v === "string" && /^https:\/\//.test(v)) out[k === "default" ? "default" : k.trim().toUpperCase()] = v;
    }
    return out;
  } catch {
    return {};
  }
}

/** Builds the GHL order page URL with the buyer's details pre-filled. */
export function ghlCheckoutUrl(
  code: string | null,
  buyer: { firstName: string; email: string; phone: string },
  utm: Record<string, string>,
): string | null {
  const links = getCheckoutLinks();
  const base = (code && links[code]) || links.default;
  if (!base) return null;
  const url = new URL(base);
  // GHL pre-fills order form fields whose names match these keys.
  url.searchParams.set("first_name", buyer.firstName);
  url.searchParams.set("email", buyer.email);
  if (buyer.phone) url.searchParams.set("phone", buyer.phone);
  if (code) url.searchParams.set("coupon_code", code);
  for (const [k, v] of Object.entries(utm)) url.searchParams.set(k, v);
  return url.toString();
}

export function paymentMode(): "stripe" | "ghl" {
  return process.env.STRIPE_SECRET_KEY ? "stripe" : "ghl";
}
