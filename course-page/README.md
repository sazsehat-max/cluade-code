# Market Titans: Day Trading Warrior course page

Next.js landing page for the course, hosted on Cloudflare Workers. It supports two ways to take payment:

| Mode | When it's used | Needs |
|---|---|---|
| **GHL checkout** (default) | `STRIPE_SECRET_KEY` is **not** set | Two GHL order pages. No Stripe access at all |
| Stripe Checkout (optional) | `STRIPE_SECRET_KEY` is set | Stripe secret key + webhook |

## GHL checkout mode (no Stripe key needed)

```
Visitor applies code TITAN25 ── page shows $1,600 → $1,200 (checked on the server)
        │
        ▼
Enrollment ticket (name, email, phone)
        │  /api/checkout
        ├──► GHL: create/update contact + tag "course-checkout-started"   (abandoned-checkout follow-up)
        └──► redirect to the GHL order page for that price, name/email/phone pre-filled
                 no code  → order page priced $1,600
                 TITAN25  → order page priced $1,200 (with $1,600 shown as "compare at")
                    │ GHL charges the card through the Stripe account already connected to GHL
                    ▼
        GHL workflow (trigger: Order Submitted / Payment Received) emails the course access link
```

Money lands exactly where GHL payments land today. Nobody needs the Stripe key.

### Setup in GHL

1. **Product** (Payments → Products): "Day Trading Warrior Course" with two one-time prices:
   - `Full price` — $1,600
   - `TITAN25` — $1,200, with *compare at price* $1,600 so the order page shows the strikethrough
2. **Two order pages** (Sites → Funnels). Duplicate your existing "Course Order Form" funnel twice:
   - Full-price checkout: order form with the $1,600 price
   - TITAN25 checkout: order form with the $1,200 price
   - On each order form, keep the field names *first_name*, *email* and *phone* so the details from the course page pre-fill.
   - Set the thank-you step to redirect to `https://YOUR-DOMAIN/thank-you` (or keep a GHL thank-you page).
3. **Optional fallback coupon** (Payments → Coupons): `TITAN25`, 25% off, on the full-price product, in case someone lands on the full-price page and types the code there.
4. **Access workflow** (Automation → Workflows):
   - Trigger: **Order Submitted** (filter: the two checkout pages) or **Payment Received** (filter: the course product)
   - Actions: add tags `course-purchased-web` and `course buyer`, remove tag `course-checkout-started`, then **Send Email** with the course login + Telegram invite (or **Grant Offer** if the course is in GHL Memberships).
5. **Abandoned checkout workflow** (recommended):
   - Trigger: Contact Tag added → `course-checkout-started`
   - Wait 1 hour → If/Else: contact has tag `course-purchased-web` → end
   - Else: email/SMS the link `https://YOUR-DOMAIN/?code=TITAN25#enroll`
6. Put the two order page URLs in the `CHECKOUT_LINKS` variable (see Cloudflare below):
   ```json
   {"default":"https://course-offer.demarkettitans.com/<full-price-page>","TITAN25":"https://course-offer.demarkettitans.com/<titan25-page>"}
   ```
   Add one entry per extra coupon code, each pointing to an order page with that price.

> Someone could open the TITAN25 order page directly without entering the code. That's the trade-off of not having the Stripe key; it's the same exposure as publishing the code in the banner.

## Stripe mode (optional, if you ever get a key)

Set `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`, and the page uses Stripe Checkout instead: Stripe shows $1,600, the TITAN25 line and $1,200, and the webhook at `/api/stripe/webhook` (events `checkout.session.completed` and `checkout.session.async_payment_succeeded`) tags the buyer `course-purchased-web` in GHL. Your client can paste the key into Cloudflare themselves, so you never see it. A restricted key with write access to *Checkout Sessions* and *Coupons* is enough.

## Cloudflare

**Option A: automatic deploys from GitHub (recommended)**
Cloudflare Dashboard → Workers & Pages → Create → Import a repository → pick this repo.
- Root directory: `course-page`
- Build command: `npx opennextjs-cloudflare build`
- Deploy command: `npx opennextjs-cloudflare deploy`
- Build variables: `NEXT_PUBLIC_SITE_URL=https://YOUR-DOMAIN` (and `NEXT_PUBLIC_META_PIXEL_ID` if you use the pixel)

**Option B: deploy from your computer**
```bash
cd course-page
npm install
npx wrangler login
npm run deploy
```

**Secret** (Worker → Settings → Variables and Secrets, or the CLI):
```bash
npx wrangler secret put GHL_API_KEY
```
(Stripe mode only: also `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`.)

**Plain variables** in `wrangler.jsonc`: `GHL_LOCATION_ID`, `NEXT_PUBLIC_SITE_URL` (your real domain) and `CHECKOUT_LINKS` (your two GHL order page URLs).

**Custom domain**: Worker → Settings → Domains & Routes → Add custom domain (e.g. `course.demarkettitans.com`).

## Test before going live

1. Open the page with `?code=TITAN25`, fill the ticket and continue: you should land on the $1,200 GHL order page with your details filled in.
2. Without a code you should land on the $1,600 page.
3. In GHL, check the contact got the `course-checkout-started` tag, then place a test order (GHL test mode or a 100% test coupon) and confirm the access email arrives.

## Changing price or coupons

- List price: `listPriceCents` in `src/lib/offer.ts` (and the matching GHL product price).
- Coupons: `DEFAULT_COUPONS` in `src/lib/offer.ts`, or set a `COUPONS` variable on Cloudflare without redeploying code, e.g. `{"TITAN25":25,"VIP40":40}`.
- Sharing a link with the code pre-applied: `https://YOUR-DOMAIN/?code=TITAN25`.

The browser never decides the price: the server validates the code and picks the checkout. In GHL mode the final amount is whatever price the GHL order page charges, so keep the page prices and the code percentages in sync.

## Editing copy and media

All text, testimonials, modules and FAQ live in `src/lib/content.ts`. Images and videos are loaded from your existing GHL media library and YouTube.

## Local development

```bash
cp .dev.vars.example .dev.vars   # fill in test keys
npm install
npm run dev                      # http://localhost:3000
npm run preview                  # runs the real Cloudflare build locally
```
