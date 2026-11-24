# GHL AI prompt: Day Trading Warrior course landing page

Everything here is built by GHL's AI. No custom code.

How the coupon works (all native GHL):
- The landing page shows **$1,600**, and tells visitors to use **code TITAN25 at checkout** for 25% off.
- Every button goes to **one GHL checkout page** with the product *Day Trading Warrior Course* ($1,600).
- On that page, GHL's own order form has a **coupon box**. The buyer types TITAN25 and GHL changes the total to **$1,200**. (The TITAN25 coupon already exists in your GHL and only works on this product.)
- GHL's own **Order Submitted** workflow sends course access.

How to use:
1. Paste **Prompt A** into GHL's AI to build the landing page.
2. Paste **Prompt B** into GHL's AI to build the checkout page.
3. Do the 4 settings clicks in **Part C** (they're settings toggles, not code).
4. If GHL's AI has a character limit, paste the *Global design system* first, then one section at a time ("Add this section below the previous one: …").

Before pasting Prompt A, replace `{{CHECKOUT_URL}}` with your checkout page link (you get it after building Prompt B, e.g. `https://course-offer.demarkettitans.com/course-checkout`). You can also build Prompt B first.

---

## Prompt A: Landing page (copy everything inside the box)

```
Build a single, long-form, high-converting sales landing page for an online trading course. Follow every instruction below exactly. Use the exact copy provided — do not rewrite, shorten, add hype, add income claims, add countdown timers, or invent testimonials, numbers or module names.

=== CONTEXT ===
Brand: Market Titans (logo: red Spartan helmet with a rising chart arrow).
Product: "The Day Trading Warrior Course" by Demark Davis.
What it is: a step-by-step price action and market structure trading system for US30, Gold and futures. 19 modules, lifetime access, private Telegram community included.
Audience: retail traders (mostly US, mostly on mobile, many from Facebook/Instagram ads) who are inconsistent or new, frustrated by guessing, signals and blown accounts.
Page goal: one action only — enroll. Every button goes to checkout. No navigation menu links other than the logo and one "Enroll now" button.
Pricing logic: list price $1,600. Code TITAN25, entered at checkout, gives 25% off = $1,200. Wherever price appears, show "$1,600" struck through next to "$1,200 with code TITAN25 at checkout".
Tone: direct, calm, disciplined, confident. Short sentences. Plain words. No exclamation marks, no emojis, no "get rich", no guarantees of profit.

=== GLOBAL DESIGN SYSTEM ===
Theme: dark, premium "trading terminal at night". Not a generic black-and-neon look: warm black, logo red, Spartan bronze accents, bone-white text.
Colors (use these hex values only):
- Page background (Obsidian): #0E0D0C
- Panel / alternate section background: #171513
- Raised panel: #1F1C19
- Divider lines: #2F2A25 (1px)
- Main text (Bone): #EDE6DA
- Bright text / bold: #F6F1E7
- Muted text: #A0968A
- Faint text: #6F665C
- Titan Red (buttons, highlights): #D7262E ; hover #EE3A41 ; button bottom shadow #A8161D
- Bronze (small labels, accents): #C0904F
- Success green (only for "discount applied"): #2F9A63
Typography:
- Headlines: "Big Shoulders Display" (if unavailable use "Oswald" or "Anton"), weight 800–900, ALL CAPS, very tight line-height (0.9), slightly condensed.
- Body: "Hanken Grotesk" (if unavailable use "Inter"), 17px desktop / 16px mobile, line-height 1.6, color #A0968A for paragraphs, #F6F1E7 for bold.
- Labels, prices, small tags: "JetBrains Mono" (if unavailable use "Roboto Mono"), 12px, uppercase, letter-spacing 0.14em, color #C0904F.
Headline sizes: H1 ~104px desktop / 56px mobile. H2 ~64px desktop / 38px mobile. In most H2s, the second sentence is colored Titan Red #EE3A41 (marked below as [RED]...[/RED]).
Every section starts with a small mono "eyebrow" label in bronze above the H2.
Buttons: solid Titan Red #D7262E, white bold text, 4px radius, 4px solid darker red bottom shadow (#A8161D) so it looks pressable, generous padding (18px 30px for large). Full width on mobile.
Layout: max content width 1200px, centered, 40px side padding desktop, 16px mobile. Section vertical padding ~120px desktop / 72px mobile. Alternate section backgrounds between #0E0D0C and #171513, separated by a 1px #2F2A25 line.
Corners: small (4–6px). No heavy gradients, no glows except one soft red radial glow behind the hero video. No stock photos.
Mobile: everything stacks to one column. If GHL supports a sticky/fixed bar, add one at the bottom on mobile with "$1,600" struck through, "$1,200" in bold, small text "with TITAN25", and a red "Enroll" button linking to {{CHECKOUT_URL}}. If not, skip it.
Accessibility: high contrast, visible focus outlines, all images with alt text.

=== SECTION 0 — TICKER BAR (very top, full width) ===
A thin full-width red (#D7262E) bar, white mono uppercase 12px text, items separated by a small ▲. If a scrolling/marquee text element is available, make it scroll slowly right-to-left like a stock ticker; otherwise keep it static and centered, showing as many items as fit:
"US30 · GOLD · FUTURES ▲ 19 STEP-BY-STEP MODULES ▲ LIFETIME ACCESS ▲ PRIVATE TELEGRAM ROOM INCLUDED ▲ CODE TITAN25 TAKES 25% OFF ▲ PRICE ACTION, NOT INDICATORS"

=== SECTION 1 — HEADER (sticky) ===
Dark translucent bar (#0E0D0C at 86% opacity, blur), 64px tall, bottom 1px line #2F2A25.
Left: logo image https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://assets.cdn.filesafe.space/DYG4MhubhMu6t5fWQcS3/media/69777a4fd4fb9050150771c2.png (36px tall) + text "MARKET" in bone and "TITANS" in red, headline font, uppercase.
Right: small red button "Enroll now" → {{CHECKOUT_URL}}.

=== SECTION 2 — HERO ===
Background #0E0D0C with very faint horizontal lines every 80px (like a chart's price grid, 4% opacity) and a soft red glow behind the video.
Two columns on desktop (copy left 55%, video right 45%); on mobile copy first, then video.
Left column:
- Eyebrow: "THE DAY TRADING WARRIOR COURSE · BY DEMARK DAVIS"
- H1 on two lines: "STOP GUESSING." (bone) / "START EXECUTING." (red #EE3A41)
- Sub-headline (20px, muted, max ~46 characters per line): "A step-by-step price action system for **US30, Gold and futures**. Learn exactly what to look for, when to wait, and how much to risk, before you ever click buy."
- Large red button: "Enroll in the course" → {{CHECKOUT_URL}}.
- Next to the button, mono text: "~~$1,600~~ **$1,200** with code [TITAN25]" — TITAN25 inside a small dashed bronze-bordered box.
- Below, a row of 3 facts separated by thin vertical lines, each a big headline-font word with a small label under it: "19" / "step-by-step modules", "LIFETIME" / "access", "TELEGRAM" / "room included".
Right column:
- A "chart window" frame: dark panel #171513 with 1px border, a slim top bar containing three small grey dots, the mono text "Watch first · Demark Davis", and on the right a blinking red dot with "START HERE".
- Inside: YouTube video https://www.youtube.com/watch?v=44QBtNav7R8 (16:9).
- Under the frame, 12px faint text: "Trading involves risk. This program is educational only and does not guarantee results. Outcomes depend on your discipline, execution and market conditions."

=== SECTION 3 — PROBLEM ===
Eyebrow: "WHY MOST TRADERS STAY STUCK"
H2: "THE MARKET ISN'T YOUR PROBLEM. [RED]GUESSING IS.[/RED]"
Paragraph: "Most traders react to the market instead of reading it. They jump between strategies, follow calls they don't understand, and let one bad trade turn into five. The difference isn't the market. It's the system."
Then a two-column comparison box (one bordered box split in half; stacks on mobile):
Left half (background #171513), title "WITHOUT A SYSTEM", tiny mono subtitle "CONFUSION · EMOTION · INCONSISTENCY", list with grey ✕ icons and muted text:
- Taking trades without real confirmation
- Following signals and opinions instead of reading price
- Letting fear and greed pick your entries and exits
- Cutting winners early and holding losers too long
- Risking money with no written plan
Right half (background #1F1C19 with a very subtle red tint), title "THE TITAN WAY", subtitle "CLARITY · CONTROL · EXECUTION", list with red ✓ icons and bone text:
- Read price action and structure with purpose
- Wait for confirmation before committing capital
- Decide stop, target and size before every entry
- Execute the plan, not the feeling
- Follow one repeatable process, every session
Under the box, a big bronze headline-font line: "TRADE WHAT YOU SEE. NOT WHAT YOU WANT."

=== SECTION 4 — INSTRUCTOR (background #171513) ===
Two columns: photo left (45%), copy right.
Photo: https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/DYG4MhubhMu6t5fWQcS3/media/69da8b20b30bc52371f34113.jpeg — portrait crop 4:5, focus on the person (crop out as much of the car as possible), dark gradient at the bottom, overlaid caption: "DEMARK DAVIS" (headline font) and "TRADER · MENTOR · SYSTEM BUILDER" (bronze mono).
Copy:
- Eyebrow: "YOUR INSTRUCTOR"
- H2: "I DIDN'T NEED A BETTER STRATEGY. [RED]I NEEDED A PROCESS.[/RED]"
- Paragraphs:
  "I know what it feels like to put money into the market and not get the results you expected. I've blown accounts. I've overtraded. I've second-guessed every entry."
  "Like most traders, I thought the answer was a better strategy. It wasn't. What I was missing was **structure, discipline and a process I could follow under pressure.**"
  "Once I fixed that, everything changed. Today I trade price action and market structure: high-probability setups, risk planned before entry, and the patience to sit on my hands when there's nothing worth taking."
  "This course is that process, broken into steps you can follow."
- A 3-item spec row with thin dividers (label in faint mono, value in bold): MARKETS — US30 · Gold · Futures | STYLE — Price action & market structure | COMMUNITY — Day Trading Warriors

=== SECTION 5 — FRAMEWORK ===
Eyebrow: "THE FRAMEWORK"
H2: "EVERY TRADE PASSES THE SAME THREE CHECKS."
Three columns (stack on mobile). Above them a thin grey line with a red segment that grows across the three columns (33%, 66%, 100%) to show progression.
1) Red mono tag "1 · READ", title "READ THE STRUCTURE", text "Mark the levels that matter, tell trend from range, and know where price is likely to react, on a clean chart with no indicator soup."
2) "2 · PLAN", "PLAN THE RISK", "Stop, target and position size are decided before you enter. If the trade doesn't make sense on paper, you don't take it."
3) "3 · EXECUTE", "EXECUTE WITHOUT EMOTION", "Wait for confirmation, take the trade, manage it by the plan. No revenge trades, no moving stops, no 'just this once'."

=== SECTION 6 — CURRICULUM (background #171513) ===
Two columns: intro left (sticky on desktop), module list right.
Intro: eyebrow "WHAT'S INSIDE", H2 "19 MODULES. [RED]IN THE ORDER YOU NEED THEM.[/RED]", paragraph "Start with the trader, then the chart, then execution. Each module builds on the last, so you're never guessing what to study next.", and a small bordered badge with a bronze ✓: "Official course completion credential included".
Module list (each row: faint mono "MODULE N" on the left, bold title + one-line muted description on the right, thin divider between rows):
1. The Day Trading Warrior — The standards, routine and mindset the rest of the system is built on.
2. Trading Introduction — How the markets you'll trade actually move, and the vocabulary you need to follow every lesson.
3. Trading Psychology — Fear, greed, revenge trading and overconfidence, and the rules that keep them out of your decisions.
4. Healthy Lifestyle — Sleep, focus and energy. Your performance at the screen starts away from it.
5. Technical & Fundamental Analysis — Reading the chart and the news together so a headline never blindsides your setup.
6. Support & Resistance — Drawing the levels that matter and ignoring the ones that don't.
7. Candlesticks — What each candle is telling you about who is in control, and when it's a signal versus noise.
8. Trading Tools — The platform setup, order types and tools you'll use to execute cleanly.
Last row, with a subtle diagonal-stripe background and red label "MODULES 9–19": "+ 11 advanced modules — The full execution playbook unlocks inside the course once you've built the foundation."

=== SECTION 7 — PROOF ===
Eyebrow: "STUDENT STORIES"
H2: "DON'T TAKE MY WORD FOR IT. [RED]HEAR IT FROM THEM.[/RED]"
A 3×3 grid of YouTube videos (2 columns on tablet, 1 on small phones), each 16:9 with rounded 5px corners and a small dark label "STUDENT STORY" in the bottom-left corner:
https://youtu.be/5Ev_SqfuR6g , https://youtu.be/wybBOwU0zEw , https://youtu.be/5s6OGs591uo , https://youtu.be/Tm3CeO4O9AQ , https://youtu.be/OCthwJM1bWk , https://youtu.be/GjYWeDYDqxk , https://youtu.be/dUOrHnJzk70 , https://youtu.be/Z-96KqhAavs , https://youtu.be/FbetqfPFYfQ
Below: sub-heading "INSIDE THE DAY TRADING WARRIORS CHAT" with small mono text on the right "Unedited screenshots from our private group. Swipe to scroll."
Then a horizontally scrolling row (carousel/slider) of tall phone screenshots, rounded 14px corners, ~240px wide each:
https://images.leadconnectorhq.com/image/f_webp/q_80/r_640/u_https://storage.googleapis.com/msgsndr/DYG4MhubhMu6t5fWQcS3/media/697875f1faab9c95fccccde8.webp
https://images.leadconnectorhq.com/image/f_webp/q_80/r_640/u_https://storage.googleapis.com/msgsndr/DYG4MhubhMu6t5fWQcS3/media/697875f00b14440bffa6f7dc.webp
https://images.leadconnectorhq.com/image/f_webp/q_80/r_640/u_https://storage.googleapis.com/msgsndr/DYG4MhubhMu6t5fWQcS3/media/697875f09b595863d6f592d0.jpeg
https://images.leadconnectorhq.com/image/f_webp/q_80/r_640/u_https://storage.googleapis.com/msgsndr/DYG4MhubhMu6t5fWQcS3/media/697875f00b1444358ca6f7dd.jpeg
https://images.leadconnectorhq.com/image/f_webp/q_80/r_640/u_https://storage.googleapis.com/msgsndr/DYG4MhubhMu6t5fWQcS3/media/697875f09b595832f0f592d1.jpeg
https://images.leadconnectorhq.com/image/f_webp/q_80/r_640/u_https://storage.googleapis.com/msgsndr/DYG4MhubhMu6t5fWQcS3/media/697875f1faab9caa95cccde5.jpeg
https://images.leadconnectorhq.com/image/f_webp/q_80/r_640/u_https://storage.googleapis.com/msgsndr/DYG4MhubhMu6t5fWQcS3/media/697875f1faab9c37e9cccde6.webp
https://images.leadconnectorhq.com/image/f_webp/q_80/r_640/u_https://storage.googleapis.com/msgsndr/DYG4MhubhMu6t5fWQcS3/media/697875f1faab9c3f6ecccde7.jpeg
https://images.leadconnectorhq.com/image/f_webp/q_80/r_640/u_https://storage.googleapis.com/msgsndr/DYG4MhubhMu6t5fWQcS3/media/697875f0f0448991443c8d99.jpeg
Directly under the screenshots (required, do not remove), a note with a 2px bronze left border, 13px muted text:
"These screenshots and videos show individual members' experiences and trades. They are not typical, and they are not a promise of what you will earn. Many traders lose money. Your results depend on your own skill, discipline, capital and market conditions."

=== SECTION 8 — IS THIS FOR YOU? (background #171513) ===
Eyebrow: "IS THIS FOR YOU?"
H2: "BUILT FOR TRADERS WHO ARE DONE WINGING IT."
Two columns (wider left):
Left, bronze mono label "THIS IS FOR YOU IF", red ✓ list:
- You've been trading a while, but your results swing from great weeks to account-wrecking days.
- You're new and want a structured foundation instead of piecing it together from YouTube.
- You trade, or want to trade, US30, Gold or futures.
- You're willing to follow a written plan, even when it's boring.
Right, label "SKIP IT IF", grey ✕ list, muted text:
- You want signals to copy without learning why.
- You're looking to get rich this month.
- You won't respect a stop loss.

=== SECTION 9 — ENROLL (anchor id: enroll) ===
Eyebrow: "ENROLL"
H2: "EVERYTHING YOU GET [RED]TODAY.[/RED]"
Two columns on desktop: value ledger left, enrollment ticket right (the ticket sticks while scrolling). On mobile, show the ticket FIRST, then the ledger.
Left — value ledger (a clean table with thin dividers; item name bold, short description muted below, value right-aligned in mono):
- The Core Masterclass — 19 modules, lifetime access — $2,500
- Live trade review sessions — Recorded, so you can rewatch every breakdown — $1,200
- Prop firm capital protection guide — The rules for passing and keeping funded accounts — $800
- Daily pre-market checklists & templates — The exact prep routine, ready to print — $300
- Private Telegram community — Daily pre-market watchlists, live strategy Q&A, peer accountability rooms — $99/mo — with a small bronze tag "FREE WITH ENROLLMENT"
Footer row with a 2px bone top border, headline font: "TOTAL VALUE" … "$4,899"
Under the ledger, a bordered guarantee box with a bronze shield-check icon:
Title "Action-based support guarantee"
Text: "Because you get instant access to digital material, all sales are final. But you won't be left on your own: if you complete the course, follow the process and don't see progress in your execution, we'll give you a private 1-on-1 strategy audit to find what's breaking down."
Right — the ENROLLMENT TICKET card (built with normal text, divider and button elements, no code):
- Card styled like a printed paper order ticket: background #F6F1E7, dark text #17140F, 4px corners, 26px padding, big soft dark shadow. Use the mono font for everything except the button. If possible, give the top and bottom edges a scalloped/perforated look; otherwise use a 2px dashed #17140F border on top and bottom.
- Header row: left "ENROLLMENT TICKET · MT-DTW" (11px, bold, uppercase, letter-spaced); right a small green (#2F9A63) pill with white text "CODE: TITAN25". Then a dashed divider.
- Rows (label left in small grey uppercase #6B6358, value right in bold), thin dividers between:
  COURSE — Day Trading Warrior
  ACCESS — Lifetime + Telegram room
  LIST PRICE — $1,600 (struck through with a red line)
  TITAN25 · −25% — −$400 (this whole row in green #2F9A63)
- A 2px solid dark line, then a total row: "TOTAL WITH TITAN25" (small bold uppercase, top-left) and "$1,200" very large (56px, headline font, weight 900) on the right. Next to it, a slightly rotated (−9°) red outlined "stamp" label: "FILLED AT $1,200".
- A dashed divider, then a highlighted coupon box: 1.5px dashed green border, light green background (#E9F2EA), text: "Enter code TITAN25 on the checkout page to unlock $1,200." with TITAN25 in bold.
- Full-width red button (white bold text, darker red bottom shadow): "Continue to secure checkout · $1,200 with TITAN25" → {{CHECKOUT_URL}}.
- Small text under the button (12.5px, #6B6358) with a small green shield icon: "Secure, encrypted checkout. Access emailed instantly after payment."

=== SECTION 10 — FAQ ===
Two columns: left eyebrow "QUESTIONS", H2 "STRAIGHT ANSWERS.", paragraph "Still unsure? Reply to any of our emails and a real person from the team will get back to you." Right: accordion (closed by default, red "+" icon that rotates to "×" when open, thin dividers):
Q: Is this course for beginners? A: Yes, and for traders who've been at it a while but can't stay consistent. If you're new, it gives you a structured foundation so you don't waste months jumping between strategies. If you have experience, it tightens your execution, your discipline and your process.
Q: Is this signals, or real trading education? A: Real education. You'll learn to read price action, understand market structure, manage risk and execute with a clear framework, so you can make decisions for yourself.
Q: How do I get access after I pay? A: Right away. As soon as your payment goes through, we email your course login and your Telegram invite to the address you used at checkout. If it isn't in your inbox within 10 minutes, check spam or promotions.
Q: How do I use the coupon code? A: Click any Enroll button, then type TITAN25 in the coupon box on the checkout page and press Apply. Your total drops from $1,600 to $1,200 before you pay.
Q: How long do I have access? A: For life. Go through the training at your own pace and come back to any lesson whenever you need it.
Q: How much time do I need each day? A: You don't need to stare at charts all day. The system is built around quality over quantity, so you can build a focused routine around your schedule.
Q: Do I need a big account? A: No. This course builds skill, discipline and execution. A trader with structure and risk control is in a stronger position than a trader with more money and no system.
Q: What makes this different from other trading courses? A: Most courses bury you in information. This one is built around execution: what to look for, when to stay patient, how to manage risk, and a process you can follow under pressure.
Q: How do I pay? A: Checkout runs on a secure, encrypted payment page, so your card details never touch this site. All major cards are accepted.
Q: Will this guarantee I become profitable? A: No. No legitimate program can promise that. Trading involves risk, and results depend on your discipline, decisions, consistency and market conditions.
Q: Is this financial advice? A: No. This program is for educational purposes only.

=== SECTION 11 — FINAL CALL TO ACTION ===
Centered, background #0E0D0C with a soft red glow rising from the bottom.
Huge headline (two lines): "THE MARKET OPENS TOMORROW EITHER WAY." (bone) / "SHOW UP WITH A PLAN." (red)
Large red button: "Enroll for $1,200 with TITAN25" → {{CHECKOUT_URL}}.

=== SECTION 12 — FOOTER ===
Small text (12.5px, faint #6F665C), top 1px divider:
Logo (64px) + "© 2026 Built By Determination Tech LLC · Market Titans. All rights reserved."
"Disclaimer. The information provided by Market Titans is for educational purposes only and is not financial or investment advice. Trading involves substantial risk, including the loss of capital. Past results are not indicative of future performance. Before trading, consult a qualified financial professional and assess your risk tolerance. By using our content you acknowledge and accept all risks."
"This site is not part of the Facebook website or Meta Platforms, Inc., and is not endorsed by Facebook in any way. Facebook is a trademark of Meta Platforms, Inc."

=== BUTTON & LINK RULES ===
- Every "Enroll" button on the page links to {{CHECKOUT_URL}} (same tab).
- Keep the page free of exit links (no menu, no social links).
- SEO title: "The Day Trading Warrior Course | Market Titans". Meta description: "Demark Davis's step-by-step price action system for US30, Gold and futures. 19 modules, lifetime access and a private Telegram trading room."
```

---

## Prompt B: Checkout page (copy everything inside the box)

Build this as the checkout step of a funnel named `Course Checkout`, path `course-checkout`.

```
Build a short, distraction-free checkout page for "The Day Trading Warrior Course" by Market Titans. It must match the landing page's dark, premium style exactly and use only native GHL elements (no custom code). Use the exact copy below.

=== DESIGN ===
Same design system as the landing page:
Background #0E0D0C, panels #171513, dividers #2F2A25, text #EDE6DA, bold text #F6F1E7, muted #A0968A, Titan Red #D7262E (hover #EE3A41, button shadow #A8161D), bronze labels #C0904F, success green #2F9A63.
Headlines: "Big Shoulders Display" (fallback "Oswald"/"Anton"), 800–900, ALL CAPS. Body: "Hanken Grotesk" (fallback "Inter"). Labels and prices: "JetBrains Mono" (fallback "Roboto Mono"), uppercase, letter-spaced, bronze.
Max width 1100px, centered. Mobile: one column, order form first.

=== TOP BAR ===
Thin red (#D7262E) bar, white mono uppercase 12px text, centered: "USE CODE TITAN25 BELOW FOR 25% OFF · $1,600 → $1,200"
Below it: centered logo https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://assets.cdn.filesafe.space/DYG4MhubhMu6t5fWQcS3/media/69777a4fd4fb9050150771c2.png (48px tall). No navigation, no links.

=== HEADER ===
Bronze mono eyebrow: "SECURE CHECKOUT · MARKET TITANS"
H1 (56px desktop / 38px mobile): "COMPLETE YOUR ENROLLMENT." with "ENROLLMENT." in red #EE3A41.
Subtext (muted): "You're one step from the Day Trading Warrior Course. Enter code TITAN25 in the coupon box to pay $1,200 instead of $1,600."

=== TWO COLUMNS (desktop: form left 55%, summary right 45%; mobile: form first) ===
LEFT — ORDER FORM:
- Use GHL's native Order Form element, one-step layout, on a #171513 panel with 1px #2F2A25 border, 6px corners, 28px padding.
- Contact fields: First Name, Last Name, Email, Phone. Then card payment fields.
- Coupon code field visible, with an "Apply" button. Directly above it, a small green (#2F9A63) mono label: "HAVE A CODE? ENTER TITAN25".
- Order summary inside the form shows the product and total.
- Submit button: full width, Titan Red, white bold text, darker red bottom shadow, text "Complete my enrollment".
- Under the button, small muted text with a lock icon: "Secure, encrypted payment. Your course login is emailed instantly after purchase."

RIGHT — WHAT YOU GET (a bone paper "ticket" card, background #F6F1E7, dark text #17140F, mono font):
- Header: "ORDER SUMMARY · MT-DTW", dashed divider.
- Rows (grey label left, bold value right):
  COURSE — Day Trading Warrior
  ACCESS — Lifetime + Telegram room
  LIST PRICE — $1,600
  WITH CODE TITAN25 — $1,200 (green #2F9A63)
- Then a short checklist with red ✓ icons (body font):
  The Core Masterclass: 19 modules, lifetime access
  Live trade review sessions (recorded)
  Prop firm capital protection guide
  Daily pre-market checklists & templates
  Private Telegram community (normally $99/mo), free with enrollment
  Official course completion credential
- Below the card, a bordered dark box with a bronze shield icon:
  Title: "Action-based support guarantee"
  Text: "Because you get instant access to digital material, all sales are final. If you complete the course, follow the process and don't see progress in your execution, we'll give you a private 1-on-1 strategy audit."
- Then 3 small trust rows with icons: "Instant access after payment", "Lifetime access, learn at your pace", "Private Telegram trading room".

=== FOOTER ===
12px faint text #6F665C, centered:
"Trading involves substantial risk, including the loss of capital. This program is educational only and is not financial advice. Results are not typical and not guaranteed."
"© 2026 Built By Determination Tech LLC · Market Titans."

=== RULES ===
No exit links, no countdown timers, no income claims, no pop-ups. Keep the page short so the form is visible immediately on mobile.
```

---

## Part C: 4 settings clicks after GHL's AI builds the pages

These are switches in GHL's settings, not code. GHL's AI usually can't set them itself:

1. **Attach the product.** Open the checkout funnel step → **Products** tab → **Add Product** → *Day Trading Warrior Course* → price **Full price ($1,600)** → Save. (Use only this product. The TITAN25 coupon is limited to it.)
2. **Turn on the coupon box.** In the page editor, click the order form → settings → enable **Show coupon code** (sometimes labelled *Coupon field*).
3. **Set the thank-you step.** Add a step after checkout called `Thank You` and ask GHL's AI: *"Build a short thank-you page in the same dark Market Titans style: headline 'YOU'RE IN. CHECK YOUR EMAIL.' and three steps: open the access email, join the Telegram room, start Module 1 today."*
4. **Paste the checkout link into the landing page.** Replace `{{CHECKOUT_URL}}` in the landing page buttons (or ask GHL's AI: *"Set every Enroll button on this page to link to [your checkout URL]"*).

Then build the **access workflow** (Automation → Workflows → trigger **Order Submitted** on the checkout page → send the access email), as described in the earlier step-by-step guide.

## Test before going live

1. Put the order form in **Test mode** and buy with card `4242 4242 4242 4242`, any future date, any CVC.
2. Check that the total is $1,600, that typing TITAN25 brings it to $1,200, and that the access email arrives.
3. Switch back to **Live**.

> Note: the two-product setup from before is no longer needed. With this approach you only use *Day Trading Warrior Course* ($1,600) plus the TITAN25 coupon. The *TITAN25 Offer* product ($1,200) can stay unused or be archived.
