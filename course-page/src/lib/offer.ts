/**
 * Single source of truth for the course offer and coupon codes.
 * Prices are in US cents so there is never any floating-point rounding.
 */
export const OFFER = {
  sku: "day-trading-warrior-course",
  name: "The Day Trading Warrior Course",
  listPriceCents: 160_000, // $1,600
} as const;

/** Default coupons: code -> percent off. Can be overridden with the COUPONS variable on Cloudflare. */
const DEFAULT_COUPONS: Record<string, number> = {
  TITAN25: 25,
};

export function getCoupons(raw?: string): Record<string, number> {
  if (!raw) return DEFAULT_COUPONS;
  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const out: Record<string, number> = {};
    for (const [code, pct] of Object.entries(parsed)) {
      const n = Number(pct);
      if (Number.isFinite(n) && n > 0 && n < 100) out[code.trim().toUpperCase()] = n;
    }
    return out;
  } catch {
    return DEFAULT_COUPONS;
  }
}

export type Quote = {
  listPriceCents: number;
  discountCents: number;
  totalCents: number;
  code: string | null;
  percentOff: number;
};

export function normalizeCode(code: unknown): string {
  return typeof code === "string" ? code.trim().toUpperCase().slice(0, 40) : "";
}

/** Returns a quote, or null when a code was given but is not valid. */
export function quote(rawCode?: unknown, couponsJson?: string): Quote | null {
  const code = normalizeCode(rawCode);
  const list = OFFER.listPriceCents;
  if (!code) return { listPriceCents: list, discountCents: 0, totalCents: list, code: null, percentOff: 0 };
  const pct = getCoupons(couponsJson)[code];
  if (!pct) return null;
  const discount = Math.round((list * pct) / 100);
  return { listPriceCents: list, discountCents: discount, totalCents: list - discount, code, percentOff: pct };
}

export function formatUSD(cents: number): string {
  const dollars = cents / 100;
  return dollars.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: dollars % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  });
}
