/** All page copy and media in one place, so it can be edited without touching layout code. */

const CDN = "https://images.leadconnectorhq.com/image/f_webp/q_80";
const media = (size: number, file: string, bucket: "filesafe" | "gcs" = "filesafe") =>
  `${CDN}/r_${size}/u_${
    bucket === "filesafe"
      ? "https://assets.cdn.filesafe.space/DYG4MhubhMu6t5fWQcS3/media/"
      : "https://storage.googleapis.com/msgsndr/DYG4MhubhMu6t5fWQcS3/media/"
  }${file}`;

export const BRAND = {
  name: "Market Titans",
  course: "The Day Trading Warrior Course",
  logo: media(320, "69777a4fd4fb9050150771c2.png"),
  instructorPhoto: media(1200, "69da8b20b30bc52371f34113.jpeg"),
  heroVideoId: "44QBtNav7R8",
  publicCode: "TITAN25",
};

export const TICKER = [
  "Launch offer: code TITAN25 takes 25% off",
  "US30 · Gold · Futures",
  "19 step-by-step modules",
  "Lifetime access",
  "Private Telegram room included",
  "Price action, not indicators",
];

export const OLD_WAY = [
  "Taking trades without real confirmation",
  "Following signals and opinions instead of reading price",
  "Letting fear and greed pick your entries and exits",
  "Cutting winners early and holding losers too long",
  "Risking money with no written plan",
];

export const TITAN_WAY = [
  "Read price action and structure with purpose",
  "Wait for confirmation before committing capital",
  "Decide stop, target and size before every entry",
  "Execute the plan, not the feeling",
  "Follow one repeatable process, every session",
];

export const FRAMEWORK = [
  {
    step: "Read",
    title: "Read the structure",
    body: "Mark the levels that matter, tell trend from range, and know where price is likely to react, on a clean chart with no indicator soup.",
  },
  {
    step: "Plan",
    title: "Plan the risk",
    body: "Stop, target and position size are decided before you enter. If the trade doesn't make sense on paper, you don't take it.",
  },
  {
    step: "Execute",
    title: "Execute without emotion",
    body: "Wait for confirmation, take the trade, manage it by the plan. No revenge trades, no moving stops, no “just this once”.",
  },
];

export const MODULES = [
  { title: "The Day Trading Warrior", body: "The standards, routine and mindset the rest of the system is built on." },
  { title: "Trading Introduction", body: "How the markets you'll trade actually move, and the vocabulary you need to follow every lesson." },
  { title: "Trading Psychology", body: "Fear, greed, revenge trading and overconfidence, and the rules that keep them out of your decisions." },
  { title: "Healthy Lifestyle", body: "Sleep, focus and energy. Your performance at the screen starts away from it." },
  { title: "Technical & Fundamental Analysis", body: "Reading the chart and the news together so a headline never blindsides your setup." },
  { title: "Support & Resistance", body: "Drawing the levels that matter and ignoring the ones that don't." },
  { title: "Candlesticks", body: "What each candle is telling you about who is in control, and when it's a signal versus noise." },
  { title: "Trading Tools", body: "The platform setup, order types and tools you'll use to execute cleanly." },
];

export const ADVANCED_MODULE_COUNT = 11;

export const TESTIMONIAL_VIDEOS = [
  "5Ev_SqfuR6g",
  "wybBOwU0zEw",
  "5s6OGs591uo",
  "Tm3CeO4O9AQ",
  "OCthwJM1bWk",
  "GjYWeDYDqxk",
  "dUOrHnJzk70",
  "Z-96KqhAavs",
  "FbetqfPFYfQ",
];

export const CHAT_SCREENSHOTS = [
  "697875f1faab9c95fccccde8.webp",
  "697875f00b14440bffa6f7dc.webp",
  "697875f09b595863d6f592d0.jpeg",
  "697875f00b1444358ca6f7dd.jpeg",
  "697875f09b595832f0f592d1.jpeg",
  "697875f1faab9caa95cccde5.jpeg",
  "697875f1faab9c37e9cccde6.webp",
  "697875f1faab9c3f6ecccde7.jpeg",
  "697875f0f0448991443c8d99.jpeg",
].map((f) => ({ thumb: media(640, f, "gcs"), full: media(1200, f, "gcs") }));

export const FOR_YOU = [
  "You've been trading a while, but your results swing from great weeks to account-wrecking days.",
  "You're new and want a structured foundation instead of piecing it together from YouTube.",
  "You trade, or want to trade, US30, Gold or futures.",
  "You're willing to follow a written plan, even when it's boring.",
];

export const NOT_FOR_YOU = [
  "You want signals to copy without learning why.",
  "You're looking to get rich this month.",
  "You won't respect a stop loss.",
];

export const STACK = [
  { item: "The Core Masterclass", detail: "19 modules, lifetime access", value: 2500 },
  { item: "Live trade review sessions", detail: "Recorded, so you can rewatch every breakdown", value: 1200 },
  { item: "Prop firm capital protection guide", detail: "The rules for passing and keeping funded accounts", value: 800 },
  { item: "Daily pre-market checklists & templates", detail: "The exact prep routine, ready to print", value: 300 },
  {
    item: "Private Telegram community",
    detail: "Daily pre-market watchlists, live strategy Q&A, peer accountability rooms",
    value: 99,
    suffix: "/mo",
    note: "Free with enrollment",
  },
];

export const STACK_TOTAL = 4899;

export const FAQ = [
  {
    q: "Is this course for beginners?",
    a: "Yes, and for traders who've been at it a while but can't stay consistent. If you're new, it gives you a structured foundation so you don't waste months jumping between strategies. If you have experience, it tightens your execution, your discipline and your process.",
  },
  {
    q: "Is this signals, or real trading education?",
    a: "Real education. You'll learn to read price action, understand market structure, manage risk and execute with a clear framework, so you can make decisions for yourself.",
  },
  {
    q: "How do I get access after I pay?",
    a: "Right away. As soon as your payment goes through, we email your course login and your Telegram invite to the address you used at checkout. If it isn't in your inbox within 10 minutes, check spam or promotions.",
  },
  {
    q: "How do I use a coupon code?",
    a: "Type your code in the enrollment ticket and press Apply. You'll see the discount and your new total before you continue, and the payment page shows the same discounted price.",
  },
  {
    q: "How long do I have access?",
    a: "For life. Go through the training at your own pace and come back to any lesson whenever you need it.",
  },
  {
    q: "How much time do I need each day?",
    a: "You don't need to stare at charts all day. The system is built around quality over quantity, so you can build a focused routine around your schedule.",
  },
  {
    q: "Do I need a big account?",
    a: "No. This course builds skill, discipline and execution. A trader with structure and risk control is in a stronger position than a trader with more money and no system.",
  },
  {
    q: "What makes this different from other trading courses?",
    a: "Most courses bury you in information. This one is built around execution: what to look for, when to stay patient, how to manage risk, and a process you can follow under pressure.",
  },
  {
    q: "How do I pay?",
    a: "Checkout runs on a secure, encrypted payment page, so your card details never touch this site. All major cards are accepted.",
  },
  {
    q: "Will this guarantee I become profitable?",
    a: "No. No legitimate program can promise that. Trading involves risk, and results depend on your discipline, decisions, consistency and market conditions.",
  },
  {
    q: "Is this financial advice?",
    a: "No. This program is for educational purposes only.",
  },
];

/* ---------- redesign additions ---------- */

export const HERO = {
  pill: "For traders tired of guessing on US30, Gold & futures",
  sub: "You don't need another indicator, another signal group or another strategy video. You need one process you can follow when the candle is moving fast and your heart is pounding. That's what this course gives you.",
};

export const TRUST = ["Instant access", "Lifetime access", "Secure checkout", "Private Telegram room"];

export const PAIN_MOMENTS = [
  { title: "Stopped out, then it runs", body: "You get taken out by a few points, and price goes exactly where you said it would. Without you." },
  { title: "Winners cut, losers held", body: "You grab a small win out of fear, then hold a loser “until it comes back”. It doesn't." },
  { title: "One bad trade becomes five", body: "You need to make it back today, so you keep clicking. The red day gets redder." },
  { title: "Hours of videos, still frozen", body: "You've watched more trading content than you can count, and you still hesitate at the entry." },
  { title: "Following calls you don't understand", body: "Someone posts a trade, you copy it, it fails, and you have no idea why." },
  { title: "Same account, a year later", body: "After all the effort, your balance looks the same as it did last year. Or smaller." },
];

export const COST = [
  { k: "Money", body: "Every unplanned trade is money handed to traders who did have a plan." },
  { k: "Time", body: "Another month of free videos is another month of the same results." },
  { k: "Confidence", body: "Each blown day makes the next good setup harder to take." },
];

export const CHECKLIST = [
  "Key level marked on the higher timeframe",
  "Price reacted at the level and confirmed",
  "Stop placed where the idea is proven wrong",
  "Position size set before entry",
  "Reward is worth the risk",
];

export const DASH_MODULES = [
  { n: 1, t: "The Day Trading Warrior", s: "done" },
  { n: 2, t: "Trading Introduction", s: "done" },
  { n: 3, t: "Trading Psychology", s: "now" },
  { n: 4, t: "Healthy Lifestyle", s: "next" },
  { n: 5, t: "Technical & Fundamental Analysis", s: "next" },
  { n: 6, t: "Support & Resistance", s: "lock" },
];

export const COMPARE = {
  cols: ["Market Titans", "Free YouTube", "Signal groups", "Going it alone"],
  rows: [
    { f: "A clear order to learn in", v: ["yes", "no", "no", "no"] },
    { f: "Teaches the why, not just the what", v: ["yes", "some", "no", "some"] },
    { f: "Risk plan before every trade", v: ["yes", "some", "no", "no"] },
    { f: "Daily pre-market watchlist", v: ["yes", "no", "yes", "no"] },
    { f: "Community and accountability", v: ["yes", "no", "some", "no"] },
    { f: "Builds a skill you keep", v: ["yes", "some", "no", "some"] },
  ],
};

export const NEXT_STEPS = [
  { t: "Check out securely", b: "Enter your details on the encrypted checkout page." },
  { t: "Get your login", b: "Your course login lands in your inbox within minutes." },
  { t: "Start today", b: "Join the Telegram room and finish Module 1 tonight." },
];
