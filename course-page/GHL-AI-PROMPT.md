# GHL AI prompt: Day Trading Warrior course landing page

How to use:
- **Full prompt** (Part 1): paste into GHL's AI page/funnel builder in one go.
- If GHL's AI has a character limit, paste **Part 1 → Global design** first, then each **Section** one at a time ("Add this section below the previous one: …").
- **Part 2** is a Custom Code snippet for the coupon box and the "Filled at $1,200" ticket. GHL's AI can't build that logic, so add it yourself (Add Element → Custom JS/HTML) where the prompt says `[COUPON TICKET – CUSTOM CODE]`.

Before you paste, replace the two checkout links:
- `{{FULL_PRICE_CHECKOUT_URL}}` → your $1,600 order page, e.g. `https://course-offer.demarkettitans.com/course-checkout`
- `{{TITAN25_CHECKOUT_URL}}` → your $1,200 order page, e.g. `https://course-offer.demarkettitans.com/course-checkout-titan25`

---

## Part 1: The prompt (copy everything inside the box)

```
Build a single, long-form, high-converting sales landing page for an online trading course. Follow every instruction below exactly. Use the exact copy provided — do not rewrite, shorten, add hype, add income claims, add countdown timers, or invent testimonials, numbers or module names.

=== CONTEXT ===
Brand: Market Titans (logo: red Spartan helmet with a rising chart arrow).
Product: "The Day Trading Warrior Course" by Demark Davis.
What it is: a step-by-step price action and market structure trading system for US30, Gold and futures. 19 modules, lifetime access, private Telegram community included.
Audience: retail traders (mostly US, mostly on mobile, many from Facebook/Instagram ads) who are inconsistent or new, frustrated by guessing, signals and blown accounts.
Page goal: one action only — enroll. Every button goes to checkout. No navigation menu links other than the logo and one "Enroll now" button.
Pricing logic: list price $1,600. Code TITAN25 gives 25% off = $1,200. Show "$1,600" struck through next to "$1,200 with code TITAN25" wherever price appears.
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
Mobile: everything stacks to one column. Add a sticky bottom bar on mobile (appears after scrolling past the hero) with "$1,600" struck through, "$1,200" in bold, small text "with TITAN25", and a red "Enroll" button that scrolls to the Enroll section.
Accessibility: high contrast, visible focus outlines, all images with alt text.

=== SECTION 0 — TICKER BAR (very top, full width) ===
A thin full-width red (#D7262E) bar, white mono uppercase 12px text, scrolling slowly right-to-left like a stock ticker, items separated by a small ▲:
"US30 · GOLD · FUTURES ▲ 19 STEP-BY-STEP MODULES ▲ LIFETIME ACCESS ▲ PRIVATE TELEGRAM ROOM INCLUDED ▲ CODE TITAN25 TAKES 25% OFF ▲ PRICE ACTION, NOT INDICATORS"

=== SECTION 1 — HEADER (sticky) ===
Dark translucent bar (#0E0D0C at 86% opacity, blur), 64px tall, bottom 1px line #2F2A25.
Left: logo image https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://assets.cdn.filesafe.space/DYG4MhubhMu6t5fWQcS3/media/69777a4fd4fb9050150771c2.png (36px tall) + text "MARKET" in bone and "TITANS" in red, headline font, uppercase.
Right: small red button "Enroll now" → scrolls to the Enroll section.

=== SECTION 2 — HERO ===
Background #0E0D0C with very faint horizontal lines every 80px (like a chart's price grid, 4% opacity) and a soft red glow behind the video.
Two columns on desktop (copy left 55%, video right 45%); on mobile copy first, then video.
Left column:
- Eyebrow: "THE DAY TRADING WARRIOR COURSE · BY DEMARK DAVIS"
- H1 on two lines: "STOP GUESSING." (bone) / "START EXECUTING." (red #EE3A41)
- Sub-headline (20px, muted, max ~46 characters per line): "A step-by-step price action system for **US30, Gold and futures**. Learn exactly what to look for, when to wait, and how much to risk, before you ever click buy."
- Large red button: "Enroll in the course" → Enroll section.
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
Right — [COUPON TICKET – CUSTOM CODE]: leave an empty Custom Code / HTML element here, about 460px wide. (I will paste the code myself.) If you cannot leave a code element, build a static fallback card: light paper background #F6F1E7, dark text #17140F, mono font, title "ENROLLMENT TICKET · MT-DTW", rows "Course: Day Trading Warrior", "Access: Lifetime + Telegram room", "List price: $1,600", a highlighted line "Code TITAN25: −25% → $1,200", a big total "$1,200", and two buttons: red "Enroll for $1,200 with TITAN25" → {{TITAN25_CHECKOUT_URL}} and a small text link "Pay full price ($1,600)" → {{FULL_PRICE_CHECKOUT_URL}}.

=== SECTION 10 — FAQ ===
Two columns: left eyebrow "QUESTIONS", H2 "STRAIGHT ANSWERS.", paragraph "Still unsure? Reply to any of our emails and a real person from the team will get back to you." Right: accordion (closed by default, red "+" icon that rotates to "×" when open, thin dividers):
Q: Is this course for beginners? A: Yes, and for traders who've been at it a while but can't stay consistent. If you're new, it gives you a structured foundation so you don't waste months jumping between strategies. If you have experience, it tightens your execution, your discipline and your process.
Q: Is this signals, or real trading education? A: Real education. You'll learn to read price action, understand market structure, manage risk and execute with a clear framework, so you can make decisions for yourself.
Q: How do I get access after I pay? A: Right away. As soon as your payment goes through, we email your course login and your Telegram invite to the address you used at checkout. If it isn't in your inbox within 10 minutes, check spam or promotions.
Q: How do I use a coupon code? A: Type your code in the enrollment ticket and press Apply. You'll see the discount and your new total before you continue, and the payment page shows the same discounted price.
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
Large red button: "Enroll for $1,200 with TITAN25" → Enroll section (#enroll).

=== SECTION 12 — FOOTER ===
Small text (12.5px, faint #6F665C), top 1px divider:
Logo (64px) + "© 2026 Built By Determination Tech LLC · Market Titans. All rights reserved."
"Disclaimer. The information provided by Market Titans is for educational purposes only and is not financial or investment advice. Trading involves substantial risk, including the loss of capital. Past results are not indicative of future performance. Before trading, consult a qualified financial professional and assess your risk tolerance. By using our content you acknowledge and accept all risks."
"This site is not part of the Facebook website or Meta Platforms, Inc., and is not endorsed by Facebook in any way. Facebook is a trademark of Meta Platforms, Inc."

=== BUTTON & LINK RULES ===
- Every "Enroll" button on the page scrolls to the Enroll section (#enroll). Only the ticket in the Enroll section links to checkout.
- Keep the page free of exit links (no menu, no social links).
- SEO title: "The Day Trading Warrior Course | Market Titans". Meta description: "Demark Davis's step-by-step price action system for US30, Gold and futures. 19 modules, lifetime access and a private Telegram trading room."
```

---

## Part 2: Coupon ticket (Custom Code element)

In the GHL editor, in the Enroll section's right column: **Add Element → Custom JS/HTML → Open code editor**, paste everything below, replace the two URLs at the top, and save.

What it does: shows the paper "enrollment ticket", validates the code, animates $1,600 → $1,200 with a "Filled at $1,200" stamp, then sends the buyer to the matching GHL order page with their name, email and phone pre-filled. It also auto-applies `?code=TITAN25` from the page link.

```html
<!-- Market Titans enrollment ticket. Paste into a GHL Custom JS/HTML element. -->
<div id="mt-ticket-root"></div>
<link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@900&family=JetBrains+Mono:wght@400;700&family=Hanken+Grotesk:wght@400;600;700&display=swap" rel="stylesheet">
<style>
#mt-ticket-root{max-width:460px;margin:0 auto}
.mtk{--ink:#17140f;--red:#d7262e;--redd:#a8161d;--ok:#2f9a63;background:#f6f1e7;color:var(--ink);padding:26px 24px 22px;border-radius:4px;font-family:'JetBrains Mono',monospace;box-shadow:0 30px 70px -25px rgba(0,0,0,.85);
-webkit-mask:radial-gradient(circle at 50% 0,transparent 5px,#000 5.5px) top/18px 10px repeat-x,radial-gradient(circle at 50% 100%,transparent 5px,#000 5.5px) bottom/18px 10px repeat-x,linear-gradient(#000,#000) center/100% calc(100% - 20px) no-repeat;
mask:radial-gradient(circle at 50% 0,transparent 5px,#000 5.5px) top/18px 10px repeat-x,radial-gradient(circle at 50% 100%,transparent 5px,#000 5.5px) bottom/18px 10px repeat-x,linear-gradient(#000,#000) center/100% calc(100% - 20px) no-repeat}
.mtk *{box-sizing:border-box}
.mtk-h{display:flex;justify-content:space-between;align-items:center;gap:10px;padding-bottom:14px;border-bottom:1.5px dashed rgba(23,20,15,.35);font-size:11px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;white-space:nowrap}
.mtk-st{padding:3px 8px;border:1.5px solid var(--ink);border-radius:3px}
.mtk.on .mtk-st{background:var(--ok);border-color:var(--ok);color:#fff}
.mtk-r{display:flex;justify-content:space-between;gap:12px;padding:9px 0;font-size:14px;border-bottom:1px solid rgba(23,20,15,.1)}
.mtk-r span:first-child{color:#6b6358;text-transform:uppercase;font-size:12px;letter-spacing:.08em}
.mtk-r b{font-weight:700}
.mtk-list{position:relative}
.mtk-list:after{content:"";position:absolute;left:-2px;right:-2px;top:52%;height:2px;background:var(--red);transform:scaleX(0);transform-origin:left;transition:transform .45s}
.mtk.on .mtk-list{color:#8a8174}.mtk.on .mtk-list:after{transform:scaleX(1)}
.mtk-disc{display:none;color:var(--ok)}.mtk.on .mtk-disc{display:flex}
.mtk-lbl{display:block;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#6b6358;margin:16px 0 6px}
.mtk-cf{display:flex;gap:8px}
.mtk input{width:100%;font-family:'Hanken Grotesk',sans-serif;font-size:16px;color:var(--ink);background:#fff;border:1.5px solid rgba(23,20,15,.22);border-radius:3px;padding:11px 12px}
.mtk input:focus{outline:none;border-color:var(--ink);box-shadow:0 0 0 3px rgba(192,144,79,.35)}
.mtk-cf input{letter-spacing:.12em;font-weight:700;text-transform:uppercase}
.mtk-ap{font:700 14px 'Hanken Grotesk',sans-serif;background:transparent;border:1.5px solid var(--ink);border-radius:3px;padding:0 16px;cursor:pointer;color:var(--ink)}
.mtk-ap:hover{background:var(--ink);color:#f6f1e7}
.mtk-ok{display:none;justify-content:space-between;align-items:center;padding:10px 12px;border:1.5px dashed var(--ok);border-radius:3px;font-size:13px;color:#1e6b44;background:rgba(47,154,99,.07)}
.mtk.on .mtk-ok{display:flex}.mtk.on .mtk-cf{display:none}
.mtk-rm{background:none;border:0;text-decoration:underline;cursor:pointer;font:inherit;color:inherit}
.mtk-err{min-height:0;margin:6px 0 0;font:600 13px 'Hanken Grotesk',sans-serif;color:var(--redd)}
.mtk-t{position:relative;margin:18px 0 6px;padding:16px 0;min-height:96px;border-top:2px solid var(--ink);border-bottom:1.5px dashed rgba(23,20,15,.35);display:flex;justify-content:space-between;align-items:flex-end}
.mtk-t>span{align-self:flex-start;font-size:12px;letter-spacing:.12em;text-transform:uppercase;font-weight:700}
.mtk-t strong{font-family:'Big Shoulders Display',Impact,sans-serif;font-weight:900;font-size:56px;line-height:.9;font-variant-numeric:tabular-nums}
.mtk-stamp{display:none;position:absolute;left:30%;top:64%;transform:translate(-50%,-50%) rotate(-9deg);border:2.5px solid var(--red);color:var(--red);padding:4px 10px;border-radius:4px;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap;opacity:.88;animation:mtkst .5s .55s cubic-bezier(.2,1.6,.4,1) both}
.mtk.on .mtk-stamp{display:block}
@keyframes mtkst{from{opacity:0;transform:translate(-50%,-50%) rotate(-9deg) scale(1.9)}}
.mtk-f{display:grid;gap:10px;margin-top:16px}
.mtk-f p{margin:0 0 2px;font:700 15px 'Hanken Grotesk',sans-serif}
.mtk-f label{display:block;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#6b6358;margin-bottom:5px}
.mtk-go{margin-top:16px;width:100%;border:0;border-radius:4px;background:var(--red);color:#fff;font:700 16px 'Hanken Grotesk',sans-serif;padding:16px;cursor:pointer;box-shadow:0 4px 0 var(--redd)}
.mtk-go:hover{background:#ee3a41}.mtk-go:active{transform:translateY(3px);box-shadow:0 1px 0 var(--redd)}
.mtk-fine{margin:12px 0 0;font:12.5px/1.5 'Hanken Grotesk',sans-serif;color:#6b6358}
@media (max-width:420px){.mtk{padding:24px 16px 20px}.mtk-t strong{font-size:46px}.mtk-stamp{display:none!important}}
@media (prefers-reduced-motion:reduce){.mtk *{animation:none!important;transition:none!important}}
</style>
<script>
(function () {
  // ====== EDIT THESE ======
  var LIST_PRICE = 1600;
  var CHECKOUT = {
    "default": "{{FULL_PRICE_CHECKOUT_URL}}",
    "TITAN25": "{{TITAN25_CHECKOUT_URL}}"
  };
  var COUPONS = { "TITAN25": 25 }; // code: percent off. Each code needs a matching GHL order page above.
  // ========================

  var root = document.getElementById("mt-ticket-root");
  if (!root) return;
  var fmt = function (n) { return "$" + Math.round(n).toLocaleString("en-US"); };
  root.innerHTML =
    '<form class="mtk" novalidate>' +
      '<div class="mtk-h"><span>Enrollment ticket · MT-DTW</span><span class="mtk-st">Open</span></div>' +
      '<div class="mtk-r"><span>Course</span><b>Day Trading Warrior</b></div>' +
      '<div class="mtk-r"><span>Access</span><b>Lifetime + Telegram room</b></div>' +
      '<div class="mtk-r"><span>List price</span><b class="mtk-list">' + fmt(LIST_PRICE) + '</b></div>' +
      '<div class="mtk-r mtk-disc"><span class="mtk-dl"></span><b class="mtk-dv"></b></div>' +
      '<label class="mtk-lbl" for="mtk-code">Coupon code</label>' +
      '<div class="mtk-cf"><input id="mtk-code" autocomplete="off" placeholder="Enter code"><button type="button" class="mtk-ap">Apply</button></div>' +
      '<div class="mtk-ok"><span class="mtk-okt"></span><button type="button" class="mtk-rm">Remove</button></div>' +
      '<p class="mtk-err" role="alert"></p>' +
      '<div class="mtk-t"><span>Total today</span><strong aria-live="polite">' + fmt(LIST_PRICE) + '</strong><span class="mtk-stamp"></span></div>' +
      '<div class="mtk-f"><p>Where should we send your access?</p>' +
        '<div><label for="mtk-fn">First name</label><input id="mtk-fn" autocomplete="given-name" required></div>' +
        '<div><label for="mtk-em">Email</label><input id="mtk-em" type="email" autocomplete="email" required></div>' +
        '<div><label for="mtk-ph">Phone (optional, for text reminders)</label><input id="mtk-ph" type="tel" autocomplete="tel"></div>' +
      '</div>' +
      '<button type="submit" class="mtk-go">Continue to secure checkout · ' + fmt(LIST_PRICE) + '</button>' +
      '<p class="mtk-fine">Secure, encrypted checkout. Access emailed instantly after payment.</p>' +
    '</form>';

  var f = root.querySelector(".mtk"), q = function (s) { return root.querySelector(s); };
  var total = q(".mtk-t strong"), go = q(".mtk-go"), err = q(".mtk-err"), codeIn = q("#mtk-code");
  var current = LIST_PRICE, applied = null;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function tick(to) {
    var from = current; current = to;
    if (reduce || from === to) { total.textContent = fmt(to); return; }
    var t0 = performance.now();
    (function step(t) {
      var p = Math.min(1, (t - t0) / 750), e = 1 - Math.pow(1 - p, 3);
      total.textContent = fmt(Math.round((from + (to - from) * e) / 100) * 100);
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }
  function apply(raw) {
    var code = String(raw || "").trim().toUpperCase();
    err.textContent = "";
    if (!code) { err.textContent = "Enter a code first."; return; }
    var pct = COUPONS[code];
    if (!pct || !CHECKOUT[code]) { applied = null; err.textContent = "That code isn't valid. Check the spelling and try again."; return; }
    applied = code;
    var off = LIST_PRICE * pct / 100, to = LIST_PRICE - off;
    q(".mtk-dl").innerHTML = code + ' <small>−' + pct + '%</small>';
    q(".mtk-dv").textContent = "−" + fmt(off);
    q(".mtk-okt").innerHTML = "<b>" + code + "</b> saves you " + fmt(off);
    q(".mtk-st").textContent = "Code applied";
    q(".mtk-stamp").textContent = "Filled at " + fmt(to);
    f.classList.add("on");
    go.textContent = "Continue to secure checkout · " + fmt(to);
    tick(to);
  }
  function removeCode() {
    applied = null; f.classList.remove("on"); codeIn.value = ""; err.textContent = "";
    q(".mtk-st").textContent = "Open";
    go.textContent = "Continue to secure checkout · " + fmt(LIST_PRICE);
    tick(LIST_PRICE);
  }
  q(".mtk-ap").addEventListener("click", function () { apply(codeIn.value); });
  codeIn.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); apply(codeIn.value); } });
  q(".mtk-rm").addEventListener("click", removeCode);

  f.addEventListener("submit", function (e) {
    e.preventDefault(); err.textContent = "";
    var fn = q("#mtk-fn").value.trim(), em = q("#mtk-em").value.trim(), ph = q("#mtk-ph").value.trim();
    if (!fn) { err.textContent = "Enter your first name."; return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)) { err.textContent = "Enter a valid email so we can send your course access."; return; }
    var url = new URL(CHECKOUT[applied] || CHECKOUT["default"]);
    url.searchParams.set("first_name", fn);
    url.searchParams.set("email", em);
    if (ph) url.searchParams.set("phone", ph);
    var here = new URLSearchParams(location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"].forEach(function (k) {
      if (here.get(k)) url.searchParams.set(k, here.get(k));
    });
    if (window.fbq) window.fbq("track", "InitiateCheckout", { value: current, currency: "USD" });
    go.disabled = true; go.textContent = "Opening secure checkout…";
    window.location.href = url.toString();
  });

  var pre = new URLSearchParams(location.search).get("code");
  if (pre) { codeIn.value = pre.toUpperCase(); apply(pre); }
})();
</script>
```

> Note: this snippet doesn't save the lead to GHL before checkout (the Next.js version does). GHL captures the contact on the order page itself. For abandoned-cart follow-up on the GHL-built page, use GHL's built-in **Order Form Submission / Abandoned Cart** options on the order page instead.

## Part 3: After GHL's AI builds the page

1. Check the copy wasn't rewritten. Fix any income claims or countdowns it added.
2. Paste the Part 2 snippet in the Enroll section.
3. Point every "Enroll" button to the section with the ticket (button action: **Go to section** → Enroll).
4. Set the sticky mobile bar's button to scroll to Enroll too.
5. Preview on mobile, then publish.
