import { quote } from "../../src/lib/offer";
import { type Env, json } from "../env";

/** POST /api/coupon — validates a coupon code and returns the resulting price. */
export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const { code } = (await request.json().catch(() => ({}))) as { code?: unknown };
  const q = quote(code, env.COUPONS);
  if (!q || !q.code) return json({ ok: false, error: "That code isn't valid. Check the spelling and try again." }, 400);
  return json({ ok: true, quote: q });
};
