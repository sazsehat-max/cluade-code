/* eslint-disable @next/next/no-img-element */
import ApplyCodeLink from "@/components/ApplyCodeLink";
import OrderTicket from "@/components/OrderTicket";
import Reveal from "@/components/Reveal";
import StickyCta from "@/components/StickyCta";
import VideoLite from "@/components/VideoLite";
import {
  ADVANCED_MODULE_COUNT,
  BRAND,
  CHAT_SCREENSHOTS,
  CHECKLIST,
  COMPARE,
  COST,
  DASH_MODULES,
  FAQ,
  FOR_YOU,
  FRAMEWORK,
  HERO,
  MODULES,
  NEXT_STEPS,
  NOT_FOR_YOU,
  OLD_WAY,
  PAIN_MOMENTS,
  STACK,
  STACK_TOTAL,
  TESTIMONIAL_VIDEOS,
  TICKER,
  TITAN_WAY,
  TRUST,
} from "@/lib/content";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
const CODE = BRAND.publicCode;
const [FEATURED_VIDEO, ...MORE_VIDEOS] = TESTIMONIAL_VIDEOS;

function Check() {
  return (
    <svg className="ico" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10.5 8 14.5 16 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
    </svg>
  );
}
function Cross() {
  return (
    <svg className="ico" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 5l10 10M15 5 5 15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
    </svg>
  );
}
function Mark({ v }: { v: string }) {
  if (v === "yes")
    return (
      <span className="cmp cmp--yes">
        <Check />
        <span className="sr">Yes</span>
      </span>
    );
  if (v === "no")
    return (
      <span className="cmp cmp--no">
        <Cross />
        <span className="sr">No</span>
      </span>
    );
  return (
    <span className="cmp cmp--some">
      <span className="cmp__long">Sometimes</span>
      <span className="cmp__short" aria-hidden="true">
        ~
      </span>
    </span>
  );
}
function TrustIcon({ i }: { i: number }) {
  const paths = [
    "M13 2 4 14h7l-1 8 9-12h-7l1-8Z", // instant
    "M12 6v6l4 2M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z", // lifetime
    "M6 10V7a6 6 0 0 1 12 0v3M5 10h14v11H5z", // secure
    "M21.9 4.3 18.7 19.4c-.2 1.1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.2-8.3c.4-.4-.1-.6-.6-.2L6.1 13.1 1.2 11.6c-1.1-.3-1.1-1.1.2-1.6L20.5 2.7c.9-.3 1.7.2 1.4 1.6Z", // telegram
  ];
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path d={paths[i]} fill={i === 3 ? "currentColor" : "none"} stroke={i === 3 ? "none" : "currentColor"} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export default function Page() {
  return (
    <>
      <a className="skip" href="#enroll">
        Skip to enrollment
      </a>
      <Reveal />

      {/* Ticker tape */}
      <div className="tape" aria-label="Course highlights">
        <div className="tape__track">
          {[0, 1].map((dup) => (
            <ul key={dup} aria-hidden={dup === 1}>
              {TICKER.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <header className="nav">
        <div className="wrap nav__in">
          <a href="#top" className="nav__brand" aria-label="Market Titans home">
            <img src={BRAND.logo} alt="" width={44} height={35} />
            <span>
              Market <b>Titans</b>
            </span>
          </a>
          <nav className="nav__links" aria-label="Page sections">
            <a href="#inside">What&rsquo;s inside</a>
            <a href="#proof">Student stories</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href="#enroll" className="btn btn--red btn--sm">
            Enroll now
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="top">
          <div className="wrap hero__grid">
            <div className="hero__copy">
              <p className="pill">
                <span className="pill__dot" aria-hidden="true" />
                {HERO.pill}
              </p>
              <h1 className="hero__h1">
                <span>Stop guessing.</span>
                <span className="red">Start executing.</span>
              </h1>
              <p className="hero__sub">{HERO.sub}</p>
              <div className="hero__cta">
                <a href="#enroll" className="btn btn--red btn--lg">
                  Start the course today
                  <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                    <path d="M4 10h11m-4-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2.2" />
                  </svg>
                </a>
                <p className="hero__price">
                  <s>$1,600</s> <b>$1,200</b> with code{" "}
                  <ApplyCodeLink code={CODE} className="code">
                    {CODE}
                  </ApplyCodeLink>
                </p>
              </div>

              <a href="#proof" className="social">
                <span className="social__faces" aria-hidden="true">
                  {TESTIMONIAL_VIDEOS.slice(0, 5).map((id) => (
                    <img key={id} src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`} alt="" width={40} height={40} />
                  ))}
                </span>
                <span className="social__txt">
                  <b>{TESTIMONIAL_VIDEOS.length} students</b> share their experience on video
                  <span className="social__arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </a>
            </div>

            <div className="hero__media">
              <div className="chartwin">
                <div className="chartwin__bar">
                  <span className="chartwin__dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>Watch first · Demark Davis</span>
                  <span className="chartwin__live">Start here</span>
                </div>
                <VideoLite id={BRAND.heroVideoId} title="Demark Davis introduces the Day Trading Warrior course" />
              </div>
              <ul className="trust">
                {TRUST.map((t, i) => (
                  <li key={t}>
                    <TrustIcon i={i} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="wrap">
            <ul className="facts">
              <li>
                <b>19</b>
                <span>step-by-step modules</span>
              </li>
              <li>
                <b>3</b>
                <span>markets: US30, Gold, futures</span>
              </li>
              <li>
                <b>Daily</b>
                <span>pre-market watchlist</span>
              </li>
              <li>
                <b>Lifetime</b>
                <span>access to every lesson</span>
              </li>
            </ul>
            <p className="risknote">
              Trading involves risk. This program is educational only and does not guarantee results. Outcomes depend on your
              discipline, execution and market conditions.
            </p>
          </div>
        </section>

        {/* PAIN */}
        <section className="sec sec--line pain" aria-labelledby="pain-h">
          <div className="wrap">
            <div className="sechead" data-reveal>
              <p className="eyebrow">Sound familiar?</p>
              <h2 id="pain-h" className="h2">
                You&rsquo;re not bad at trading. <span className="red">You&rsquo;re trading without a process.</span>
              </h2>
            </div>
            <ul className="pain__grid">
              {PAIN_MOMENTS.map((p, i) => (
                <li key={p.title} className="pain__card" data-reveal style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
                  <span className="pain__x" aria-hidden="true">
                    <Cross />
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </li>
              ))}
            </ul>
            <p className="bridge" data-reveal>
              If you nodded at even two of these, it isn&rsquo;t because you&rsquo;re not smart enough.{" "}
              <b>It&rsquo;s because nobody ever handed you a process you could follow under pressure.</b> That&rsquo;s exactly
              what this course is.
            </p>
          </div>
        </section>

        {/* COST OF WAITING */}
        <section className="sec cost" aria-labelledby="cost-h">
          <div className="wrap cost__grid">
            <div data-reveal>
              <p className="eyebrow">The cost of guessing</p>
              <h2 id="cost-h" className="h2">
                Every week without a plan <span className="red">costs you three things.</span>
              </h2>
            </div>
            <ol className="cost__list">
              {COST.map((c, i) => (
                <li key={c.k} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                  <b>{c.k}</b>
                  <p>{c.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="wrap">
            <p className="cost__close" data-reveal>
              The market opens again tomorrow. The only question is whether you show up with <span className="red">a plan</span>{" "}
              or with another guess.
            </p>
          </div>
        </section>

        {/* OLD WAY vs TITAN WAY */}
        <section className="sec sec--line" aria-labelledby="problem-h">
          <div className="wrap">
            <div className="sechead" data-reveal>
              <p className="eyebrow">The shift</p>
              <h2 id="problem-h" className="h2">
                Same market. <span className="red">Different trader.</span>
              </h2>
            </div>
            <div className="versus" data-reveal>
              <div className="versus__col versus__col--old">
                <h3>
                  Before <span>confusion · emotion · inconsistency</span>
                </h3>
                <ul>
                  {OLD_WAY.map((t) => (
                    <li key={t}>
                      <Cross />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="versus__col versus__col--new">
                <h3>
                  After the course <span>clarity · control · execution</span>
                </h3>
                <ul>
                  {TITAN_WAY.map((t) => (
                    <li key={t}>
                      <Check />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="motto" data-reveal>
              Trade what you see. Not what you want.
            </p>
          </div>
        </section>

        {/* FRAMEWORK + CHECKLIST */}
        <section className="sec framework" aria-labelledby="framework-h">
          <div className="wrap framework__grid">
            <div>
              <div data-reveal>
                <p className="eyebrow">The framework</p>
                <h2 id="framework-h" className="h2">
                  Every trade passes <span className="red">the same three checks.</span>
                </h2>
                <p className="lede">
                  No more deciding in the moment. You decide before the moment, then you execute. That one change is where
                  consistency starts.
                </p>
              </div>
              <ol className="steps">
                {FRAMEWORK.map((f, i) => (
                  <li key={f.step} className="steps__item" data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                    <span className="steps__tag">
                      {i + 1} · {f.step}
                    </span>
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </li>
                ))}
              </ol>
            </div>
            <figure className="checklist" data-reveal>
              <div className="checklist__head">
                <span>Pre-trade checklist</span>
                <span className="checklist__live">US30 · 5m</span>
              </div>
              <ul>
                {CHECKLIST.map((c) => (
                  <li key={c}>
                    <span className="checklist__box" aria-hidden="true">
                      <Check />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
              <div className="checklist__go">All checks passed · Trade approved</div>
              <figcaption>The three checks, turned into a routine you run before every entry.</figcaption>
            </figure>
          </div>
        </section>

        {/* INSIDE: DASHBOARD + CURRICULUM */}
        <section className="sec sec--line inside" id="inside" aria-labelledby="inside-h">
          <div className="wrap">
            <div className="sechead sechead--center" data-reveal>
              <p className="eyebrow">What&rsquo;s inside</p>
              <h2 id="inside-h" className="h2">
                19 modules. <span className="red">In the order you need them.</span>
              </h2>
              <p className="lede">
                Start with the trader, then the chart, then execution. Each module builds on the last, so you&rsquo;re never
                guessing what to study next.
              </p>
            </div>

            <div className="dash" data-reveal aria-hidden="true">
              <div className="dash__bar">
                <span className="chartwin__dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="dash__url">Day Trading Warrior · course portal</span>
              </div>
              <div className="dash__body">
                <aside className="dash__side">
                  <p className="dash__label">Your progress</p>
                  <div className="dash__meter">
                    <span style={{ width: "14%" }} />
                  </div>
                  <ul>
                    {DASH_MODULES.map((m) => (
                      <li key={m.n} className={`dash__m dash__m--${m.s}`}>
                        <span className="dash__n">{m.s === "done" ? "✓" : m.n}</span>
                        {m.t}
                      </li>
                    ))}
                    <li className="dash__m dash__m--lock">
                      <span className="dash__n">+</span>
                      {ADVANCED_MODULE_COUNT + 2} more modules
                    </li>
                  </ul>
                </aside>
                <div className="dash__main">
                  <div className="dash__player">
                    <span className="video__play">
                      <svg viewBox="0 0 24 24" width="22" height="22">
                        <path d="M8 5v14l11-7z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                  <p className="dash__now">Module 3 · Trading Psychology</p>
                  <p className="dash__title">Why you break your own rules, and how to stop</p>
                  <div className="dash__tabs">
                    <span className="is-on">Lesson</span>
                    <span>Worksheet</span>
                    <span>Notes</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="caption">Illustration of the course layout.</p>

            <ol className="modules">
              {MODULES.map((m, i) => (
                <li key={m.title} className="modules__item" data-reveal>
                  <span className="modules__n">Module {i + 1}</span>
                  <div>
                    <h3>{m.title}</h3>
                    <p>{m.body}</p>
                  </div>
                </li>
              ))}
              <li className="modules__item modules__item--locked" data-reveal>
                <span className="modules__n">Modules 9–19</span>
                <div>
                  <h3>+ {ADVANCED_MODULE_COUNT} advanced modules</h3>
                  <p>The full execution playbook unlocks inside the course once you&rsquo;ve built the foundation.</p>
                </div>
              </li>
            </ol>
            <p className="credential" data-reveal>
              <Check /> Official course completion credential included
            </p>
          </div>
        </section>

        {/* COMMUNITY */}
        <section className="sec community" aria-labelledby="community-h">
          <div className="wrap community__grid">
            <div data-reveal>
              <p className="eyebrow">You won&rsquo;t trade alone</p>
              <h2 id="community-h" className="h2">
                A trading room <span className="red">that keeps you honest.</span>
              </h2>
              <p className="lede">
                Most traders quit in the quiet weeks, when nobody is watching. Inside the private Telegram room you get the
                daily pre-market watchlist, live strategy Q&amp;A and accountability rooms with traders working the same
                process.
              </p>
              <ul className="ticks">
                <li>
                  <Check /> Daily pre-market watchlist from Demark
                </li>
                <li>
                  <Check /> Live strategy Q&amp;A sessions
                </li>
                <li>
                  <Check /> Peer accountability rooms
                </li>
                <li>
                  <Check /> Normally $99/month, <b>free with enrollment</b>
                </li>
              </ul>
            </div>
            <figure className="tg" data-reveal aria-hidden="true">
              <div className="tg__head">
                <span className="tg__avatar">DT</span>
                <div>
                  <b>The Day Trading Warriors</b>
                  <span>private group</span>
                </div>
              </div>
              <div className="tg__body">
                <div className="tg__msg">
                  <span className="tg__from">Demark Davis</span>
                  <p>
                    Good morning Warriors ☕ Pre-market watchlist is up: US30, Gold and NQ. Levels are marked on the charts.
                  </p>
                  <p>Reminder: no confirmation, no trade. Patience is a position.</p>
                  <span className="tg__time">8:42 AM</span>
                </div>
                <div className="tg__msg tg__msg--me">
                  <p>Levels marked. Waiting for my confirmation 🫡</p>
                  <span className="tg__time">8:47 AM ✓✓</span>
                </div>
                <div className="tg__msg">
                  <span className="tg__from">Warrior</span>
                  <p>Sat on my hands through the open. First time I didn&rsquo;t chase. Process over feelings.</p>
                  <span className="tg__time">9:58 AM</span>
                </div>
              </div>
              <figcaption>Illustration of a typical morning in the room.</figcaption>
            </figure>
          </div>
        </section>

        {/* INSTRUCTOR */}
        <section className="sec sec--line instructor" aria-labelledby="instructor-h">
          <div className="wrap instructor__grid">
            <figure className="instructor__photo" data-reveal>
              <img src={BRAND.instructorPhoto} alt="Demark Davis, founder of Market Titans" loading="lazy" />
              <figcaption>
                <b>Demark Davis</b>
                <span>Trader · Mentor · System builder</span>
              </figcaption>
            </figure>
            <div className="instructor__copy" data-reveal>
              <p className="eyebrow">Your instructor</p>
              <h2 id="instructor-h" className="h2">
                I didn&rsquo;t need a better strategy. <span className="red">I needed a process.</span>
              </h2>
              <div className="prose">
                <p>
                  I know what it feels like to put money into the market and not get the results you expected. I&rsquo;ve blown
                  accounts. I&rsquo;ve overtraded. I&rsquo;ve second-guessed every entry.
                </p>
                <p>
                  Like most traders, I thought the answer was a better strategy. It wasn&rsquo;t. What I was missing was{" "}
                  <b>structure, discipline and a process I could follow under pressure.</b>
                </p>
                <p>
                  Once I fixed that, everything changed. Today I trade price action and market structure: high-probability setups,
                  risk planned before entry, and the patience to sit on my hands when there&rsquo;s nothing worth taking.
                </p>
                <p>This course is that process, broken into steps you can follow.</p>
              </div>
              <dl className="spec">
                <div>
                  <dt>Markets</dt>
                  <dd>US30 · Gold · Futures</dd>
                </div>
                <div>
                  <dt>Style</dt>
                  <dd>Price action & market structure</dd>
                </div>
                <div>
                  <dt>Community</dt>
                  <dd>Day Trading Warriors</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section className="sec proof" id="proof" aria-labelledby="proof-h">
          <div className="wrap">
            <div className="sechead sechead--center" data-reveal>
              <p className="eyebrow">Student stories</p>
              <h2 id="proof-h" className="h2">
                Don&rsquo;t take my word for it. <span className="red">Hear it from them.</span>
              </h2>
            </div>
            <div className="proof__feature" data-reveal>
              <VideoLite id={FEATURED_VIDEO} title="Student testimonial 1" label="Student story" />
            </div>
            <div className="vids">
              {MORE_VIDEOS.map((id, i) => (
                <div key={id} data-reveal style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
                  <VideoLite id={id} title={`Student testimonial ${i + 2}`} label="Student story" />
                </div>
              ))}
            </div>

            <div className="chat">
              <div className="chat__head">
                <h3>Inside the Day Trading Warriors chat</h3>
                <p>Unedited screenshots from our private group. Swipe to scroll →</p>
              </div>
              <ul className="chat__strip">
                {CHAT_SCREENSHOTS.map((s, i) => (
                  <li key={s.thumb}>
                    <a href={s.full} target="_blank" rel="noopener noreferrer" aria-label={`Open chat screenshot ${i + 1}`}>
                      <img src={s.thumb} alt={`Day Trading Warriors chat screenshot ${i + 1}`} loading="lazy" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="disclose">
                These screenshots and videos show individual members&rsquo; experiences and trades. They are not typical, and they
                are not a promise of what you will earn. Many traders lose money. Your results depend on your own skill, discipline,
                capital and market conditions.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="sec sec--line compare" aria-labelledby="compare-h">
          <div className="wrap">
            <div className="sechead sechead--center" data-reveal>
              <p className="eyebrow">Your options</p>
              <h2 id="compare-h" className="h2">
                You can keep piecing it together. <span className="red">Or follow a process.</span>
              </h2>
            </div>
            <div className="cmpwrap" data-reveal>
              <table className="cmptable">
                <thead>
                  <tr>
                    <th scope="col">
                      <span className="sr">Feature</span>
                    </th>
                    {COMPARE.cols.map((c, i) => (
                      <th key={c} scope="col" className={i === 0 ? "is-us" : undefined}>
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.rows.map((r) => (
                    <tr key={r.f}>
                      <th scope="row">{r.f}</th>
                      {r.v.map((v, i) => (
                        <td key={i} className={i === 0 ? "is-us" : undefined}>
                          <Mark v={v} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FIT */}
        <section className="sec fit" aria-labelledby="fit-h">
          <div className="wrap">
            <div className="sechead" data-reveal>
              <p className="eyebrow">Is this for you?</p>
              <h2 id="fit-h" className="h2">
                Built for traders who are <span className="red">done winging it.</span>
              </h2>
            </div>
            <div className="fit__grid" data-reveal>
              <div className="fit__col">
                <h3>This is for you if</h3>
                <ul>
                  {FOR_YOU.map((t) => (
                    <li key={t}>
                      <Check />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="fit__col fit__col--no">
                <h3>Skip it if</h3>
                <ul>
                  {NOT_FOR_YOU.map((t) => (
                    <li key={t}>
                      <Cross />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* OFFER + ENROLL */}
        <section className="sec sec--line offer" id="enroll" aria-labelledby="offer-h">
          <div className="wrap">
            <div className="sechead" data-reveal>
              <p className="eyebrow">Enroll</p>
              <h2 id="offer-h" className="h2">
                Everything you get <span className="red">today.</span>
              </h2>
            </div>
            <div className="offer__grid">
              <div className="offer__stack">
                <table className="ledger">
                  <caption className="sr">What&rsquo;s included and what each part is worth</caption>
                  <thead>
                    <tr>
                      <th scope="col">Included</th>
                      <th scope="col">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {STACK.map((s) => (
                      <tr key={s.item}>
                        <th scope="row">
                          <b>{s.item}</b>
                          <span>{s.detail}</span>
                          {s.note ? <em>{s.note}</em> : null}
                        </th>
                        <td>
                          {usd(s.value)}
                          {s.suffix ?? ""}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total value</th>
                      <td>{usd(STACK_TOTAL)}</td>
                    </tr>
                    <tr className="ledger__today">
                      <th scope="row">Today with {CODE}</th>
                      <td>$1,200</td>
                    </tr>
                  </tfoot>
                </table>

                <div className="nextsteps">
                  <p className="nextsteps__h">What happens after you enroll</p>
                  <ol>
                    {NEXT_STEPS.map((s, i) => (
                      <li key={s.t}>
                        <span>{i + 1}</span>
                        <div>
                          <b>{s.t}</b>
                          <p>{s.b}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="guarantee">
                  <svg viewBox="0 0 48 48" width="44" height="44" aria-hidden="true">
                    <path d="M24 3 7 9v12c0 11 7.3 20.3 17 24 9.7-3.7 17-13 17-24V9L24 3Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
                    <path d="m16 24 6 6 11-12" fill="none" stroke="currentColor" strokeWidth="3" />
                  </svg>
                  <div>
                    <h3>Action-based support guarantee</h3>
                    <p>
                      Because you get instant access to digital material, all sales are final. But you won&rsquo;t be left on your
                      own: if you complete the course, follow the process and don&rsquo;t see progress in your execution, we&rsquo;ll
                      give you a private 1-on-1 strategy audit to find what&rsquo;s breaking down.
                    </p>
                  </div>
                </div>
              </div>

              <div className="offer__ticket">
                <p className="launch">
                  <span className="pill__dot" aria-hidden="true" />
                  Launch offer: {CODE} can be retired at any time
                </p>
                <OrderTicket />
                <div className="pay" aria-label="Accepted payment methods">
                  {["VISA", "Mastercard", "AMEX", "Discover"].map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                  <span className="pay__ssl">
                    <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                      <path d="M6 10V7a6 6 0 0 1 12 0v3M5 10h14v11H5z" fill="none" stroke="currentColor" strokeWidth="2.2" />
                    </svg>
                    256-bit SSL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec faq" id="faq" aria-labelledby="faq-h">
          <div className="wrap faq__grid">
            <div data-reveal>
              <p className="eyebrow">Questions</p>
              <h2 id="faq-h" className="h2">
                Straight answers.
              </h2>
              <p className="lede">Still unsure? Reply to any of our emails and a real person from the team will get back to you.</p>
            </div>
            <div className="faq__list">
              {FAQ.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final">
          <div className="wrap final__in" data-reveal>
            <h2 className="final__h">
              The market opens tomorrow either way.
              <span className="red">Show up with a plan.</span>
            </h2>
            <a href="#enroll" className="btn btn--red btn--lg">
              Enroll for $1,200 with {CODE}
            </a>
            <p className="final__sub">Instant access · Lifetime access · Private Telegram room included</p>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <div className="foot__brand">
            <img src={BRAND.logo} alt="Market Titans" width={64} height={51} loading="lazy" />
            <p>© {new Date().getFullYear()} Built By Determination Tech LLC · Market Titans. All rights reserved.</p>
          </div>
          <p>
            <b>Disclaimer.</b> The information provided by Market Titans is for educational purposes only and is not financial or
            investment advice. Trading involves substantial risk, including the loss of capital. Past results are not indicative of
            future performance. Before trading, consult a qualified financial professional and assess your risk tolerance. By using
            our content you acknowledge and accept all risks.
          </p>
          <p>
            This site is not part of the Facebook website or Meta Platforms, Inc., and is not endorsed by Facebook in any way.
            Facebook is a trademark of Meta Platforms, Inc.
          </p>
        </div>
      </footer>

      <StickyCta code={CODE} />
    </>
  );
}
