# Market Titans: Day Trading Warrior course page

Next.js course landing page, exported as a static site and hosted on **Cloudflare Pages**. Two small **Pages Functions** handle the coupon check and the checkout redirect. Payment happens on your **GHL order pages**, through the Stripe account already connected to GHL, so no Stripe key is needed.

## How it works

```
Visitor applies code TITAN25 ── page shows $1,600 → $1,200        (POST /api/coupon checks the code)
        │
        ▼
Enrollment ticket (name, email, phone)                             (POST /api/checkout)
        ├──► GHL: create/update contact + tag "course-checkout-started"   (for abandoned-cart follow-up)
        └──► redirect to the GHL order page for that price, details pre-filled
                 no code  → https://course-offer.demarkettitans.com/course-checkout          ($1,600)
                 TITAN25  → https://course-offer.demarkettitans.com/course-checkout-titan25  ($1,200)
                    │ GHL charges the card
                    ▼
        GHL thank-you step + GHL workflow (trigger: Order Submitted) emails the course access
```

## Project layout

| Path | What it is |
|---|---|
| `src/app/page.tsx`, `src/app/globals.css` | The landing page and its design |
| `src/lib/content.ts` | All copy, modules, FAQ, testimonials and media links |
| `src/lib/offer.ts` | List price and coupon codes |
| `src/lib/checkoutLinks.ts` | Builds the GHL order page link with pre-filled details |
| `src/lib/ghl.ts` | Saves the lead to GHL |
| `functions/api/coupon.ts` | `POST /api/coupon` |
| `functions/api/checkout.ts` | `POST /api/checkout` |
| `wrangler.jsonc` | Cloudflare Pages settings and plain variables |
| `ghl/thank-you.html` | Custom HTML for the GHL thank-you step (not committed: it contains the private Telegram link) |

## Settings

Plain variables (in `wrangler.jsonc`):
- `GHL_LOCATION_ID`: your GHL location
- `CHECKOUT_LINKS`: JSON mapping each code to a GHL order page, plus `default` for full price
- `COUPONS` (optional): JSON `{"CODE": percentOff}` to override the codes in `src/lib/offer.ts`

Secret (Cloudflare dashboard → Workers & Pages → market-titans-course → Settings → Variables and Secrets):
- `GHL_API_KEY`: a GHL Private Integration token with only the *View/Edit Contacts* scope. Without it the page and checkout still work; leads just aren't saved before checkout.

## Deploy

```bash
npm install
CLOUDFLARE_API_TOKEN=... npm run deploy
```
The first deploy creates the Pages project `market-titans-course` and gives it the address `https://market-titans-course.pages.dev`.

## Custom subdomain with DNS at GoDaddy

Cloudflare Pages lets a subdomain stay at GoDaddy:
1. Cloudflare dashboard → **Workers & Pages** → **market-titans-course** → **Custom domains** → **Set up a custom domain** → enter e.g. `enroll.demarkettitans.com` → Continue. **Do this step first**, or the domain won't resolve.
2. GoDaddy → **My Products → demarkettitans.com → DNS → Add New Record**:
   - Type: **CNAME**
   - Name: `enroll` (just the subdomain part)
   - Value: `market-titans-course.pages.dev`
   - TTL: default → Save
3. Back in Cloudflare, wait for the domain to show **Active** (usually minutes, sometimes up to a few hours). Cloudflare issues the SSL certificate automatically.

Don't reuse `course` (course portal) or `course-offer` (GHL funnels); those are taken.

## Changing price or coupons

- List price: `listPriceCents` in `src/lib/offer.ts`, and the matching GHL product price.
- New code: add it to `COUPONS` (or `src/lib/offer.ts`), create a GHL order page with that price, and add its link to `CHECKOUT_LINKS`.
- Sharing a link with the code pre-applied: `https://YOUR-DOMAIN/?code=TITAN25`.

## Local development

```bash
npm run dev       # page only, http://localhost:3000
npm run preview   # page + functions in the Cloudflare runtime, http://localhost:8788
```
For `preview`, put `GHL_API_KEY=...` in `.dev.vars` (never commit it).
