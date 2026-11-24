/** Variables and secrets available to the Pages Functions (set in wrangler.jsonc or the Cloudflare dashboard). */
export interface Env {
  GHL_API_KEY?: string; // secret: GHL Private Integration token (Contacts scope)
  GHL_LOCATION_ID?: string;
  CHECKOUT_LINKS?: string; // JSON: {"default": url, "CODE": url}
  COUPONS?: string; // optional JSON: {"CODE": percentOff}
}

export const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
