# Market Titans: Day Trading Warrior course page

Next.js landing page for the course, hosted on Cloudflare Workers. Payments go through Stripe, and every buyer is synced to GoHighLevel (GHL) so your GHL workflow sends the course access link automatically.

## How it works

```
Visitor applies code TITAN25 ── $1,600 → $1,200 (checked on the server)
        │
        ▼
Enrollment ticket (name, email, phone)
        │  /api/checkout
        ├──► GHL: create/update contact + tag "course-checkout-started"   (abandoned-checkout follow-up)
        └──► Stripe Checkout (shows $1,600, TITAN25 −$400, total $1,200)
                    │ payment succeeds
                    ▼
        Stripe webhook → /api/stripe/webhook
                    ├──► GHL: tag "course-purchased-web" + "course buyer", remove "course-checkout-started"
                    ├──► GHL: note with amount, coupon and Stripe IDs
                    └──► (optional) GHL: won opportunity in a pipeline
                    ▼
        GHL workflow (trigger: tag "course-purchased-web") emails the course access link
```

The buyer lands on `/thank-you`, which confirms the payment and tells them to check their email.

## Setup checklist

### 1. Stripe (where the money goes)

Use the **same Stripe account that's connected to GHL** (GHL → Payments → Integrations), so payouts arrive exactly as they do today.

1. Stripe Dashboard → Developers → API keys → copy the **Secret key** (`sk_live_…`; use `sk_test_…` while testing).
2. Stripe Dashboard → Developers → Webhooks → **Add endpoint**
   - URL: `https://YOUR-DOMAIN/api/stripe/webhook`
   - Events: `checkout.session.completed` and `checkout.session.async_payment_succeeded`
   - Copy the **Signing secret** (`whsec_…`).
3. Optional: Settings → Payment methods → turn on Apple Pay / Google Pay (and Klarna/Afterpay if you want pay-in-installments; Checkout shows them automatically).

The page creates the Stripe coupon (`MT_TITAN25_25`) by itself the first time someone uses the code.

### 2. GHL

1. **Private Integration for the website**: Settings → Private Integrations → Create. Scopes: *View/Edit Contacts* (and *Edit Opportunities* if you want the optional pipeline entry). Copy the token. Keep it separate from your main token.
2. **Access workflow** (Automation → Workflows → Create):
   - Trigger: **Contact Tag** → Tag added → `course-purchased-web`
   - Action: **Send Email** with the course login link and the Telegram invite. If the course lives in GHL Memberships, use **Grant Offer** instead (it emails the login automatically), then send the Telegram invite.
   - Optional: Send SMS "Your access email is on its way."
   - Publish it.
3. **Abandoned checkout workflow** (recommended):
   - Trigger: Contact Tag added → `course-checkout-started`
   - Wait 1 hour → If/Else: contact has tag `course-purchased-web` → end
   - Else: send email/SMS with the link `https://YOUR-DOMAIN/?code=TITAN25#enroll` (the code applies itself from the link).

> Use the new `course-purchased-web` tag as the trigger, not `course buyer`. The page adds both, but `course buyer` may already be wired to older workflows.

### 3. Cloudflare

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

**Secrets** (Worker → Settings → Variables and Secrets, or the CLI):
```bash
npx wrangler secret put STRIPE_SECRET_KEY
npx wrangler secret put STRIPE_WEBHOOK_SECRET
npx wrangler secret put GHL_API_KEY
```
`GHL_LOCATION_ID` and `NEXT_PUBLIC_SITE_URL` are plain variables in `wrangler.jsonc`. Update the site URL to your real domain.

**Custom domain**: Worker → Settings → Domains & Routes → Add custom domain (e.g. `course.demarkettitans.com`).

### 4. Test before going live

1. Use Stripe **test** keys and a test webhook endpoint.
2. Open the page with `?code=TITAN25`, fill the ticket, pay with card `4242 4242 4242 4242`, any future date, any CVC.
3. Check: the thank-you page shows your name, the GHL contact has the `course-purchased-web` tag and a note, and the access email arrived.
4. Swap in live keys.

## Changing price or coupons

- List price: `listPriceCents` in `src/lib/offer.ts`.
- Coupons: `DEFAULT_COUPONS` in `src/lib/offer.ts`, or set a `COUPONS` variable on Cloudflare without redeploying code, e.g. `{"TITAN25":25,"VIP40":40}`.
- Sharing a link with the code pre-applied: `https://YOUR-DOMAIN/?code=TITAN25`.

The browser never decides the price. The server recalculates it on checkout, so editing the page can't change what someone pays.

## Editing copy and media

All text, testimonials, modules and FAQ live in `src/lib/content.ts`. Images and videos are loaded from your existing GHL media library and YouTube.

## Local development

```bash
cp .dev.vars.example .dev.vars   # fill in test keys
npm install
npm run dev                      # http://localhost:3000
npm run preview                  # runs the real Cloudflare build locally
```
