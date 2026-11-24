/**
 * Each coupon code maps to its own GHL order page, priced at the discounted amount.
 * CHECKOUT_LINKS (a Cloudflare variable) is JSON, e.g.
 *   {"default":"https://course-offer.demarkettitans.com/course-checkout",
 *    "TITAN25":"https://course-offer.demarkettitans.com/course-checkout-titan25"}
 */
export function parseCheckoutLinks(raw?: string): Record<string, string> {
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
  linksJson: string | undefined,
  code: string | null,
  buyer: { firstName: string; email: string; phone: string },
  utm: Record<string, string>,
): string | null {
  const links = parseCheckoutLinks(linksJson);
  const base = (code && links[code]) || links.default;
  if (!base) return null;
  const url = new URL(base);
  // GHL pre-fills its order form from these keys (verified on the live pages: Full Name reads `full_name`).
  url.searchParams.set("full_name", buyer.firstName);
  url.searchParams.set("first_name", buyer.firstName);
  url.searchParams.set("email", buyer.email);
  if (buyer.phone) url.searchParams.set("phone", buyer.phone);
  for (const [k, v] of Object.entries(utm)) url.searchParams.set(k, v);
  return url.toString();
}
