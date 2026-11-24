import { quote } from "../../src/lib/offer";
import { ghlCheckoutUrl } from "../../src/lib/checkoutLinks";
import { TAGS, addTags, upsertContact } from "../../src/lib/ghl";
import { type Env, json } from "../env";

type Body = { firstName?: string; email?: string; phone?: string; code?: string; utm?: Record<string, string> };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * POST /api/checkout — saves the lead in GHL (tag: course-checkout-started) and returns
 * the GHL order page for the buyer's price, with their details pre-filled.
 */
export const onRequestPost: PagesFunction<Env> = async ({ request, env, waitUntil }) => {
  const body = (await request.json().catch(() => ({}))) as Body;
  const firstName = (body.firstName ?? "").trim().slice(0, 80);
  const email = (body.email ?? "").trim().toLowerCase().slice(0, 200);
  const phone = (body.phone ?? "").trim().slice(0, 40);

  if (!firstName) return json({ error: "Enter your first name." }, 400);
  if (!EMAIL_RE.test(email)) return json({ error: "Enter a valid email so we can send your course access." }, 400);

  // The code is checked here on the server; the browser never decides which price page to use.
  const q = quote(body.code, env.COUPONS);
  if (!q) return json({ error: "That code isn't valid. Remove it or try another." }, 400);

  const utm = Object.fromEntries(
    Object.entries(body.utm ?? {})
      .filter(([k]) => /^utm_(source|medium|campaign|content|term)$|^fbclid$/.test(k))
      .map(([k, v]) => [k, String(v).slice(0, 200)]),
  );

  const url = ghlCheckoutUrl(env.CHECKOUT_LINKS, q.code, { firstName, email, phone }, utm);
  if (!url) {
    console.error("CHECKOUT_LINKS is not configured");
    return json({ error: "Checkout isn't available right now. Try again shortly." }, 503);
  }

  // Save the lead in GHL in the background so the redirect isn't slowed down.
  if (env.GHL_API_KEY && env.GHL_LOCATION_ID) {
    const cfg = { token: env.GHL_API_KEY, locationId: env.GHL_LOCATION_ID };
    waitUntil(
      (async () => {
        try {
          const id = await upsertContact(cfg, { firstName, email, phone: phone || undefined, source: "Course Page" });
          await addTags(cfg, id, [TAGS.checkoutStarted]);
        } catch (err) {
          console.error("GHL lead capture failed:", err);
        }
      })(),
    );
  }

  return json({ url });
};
