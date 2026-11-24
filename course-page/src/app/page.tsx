/* eslint-disable @next/next/no-img-element */
import ApplyCodeLink from "@/components/ApplyCodeLink";
import OrderTicket from "@/components/OrderTicket";
import StickyCta from "@/components/StickyCta";
import VideoLite from "@/components/VideoLite";
import {
  ADVANCED_MODULE_COUNT,
  BRAND,
  CHAT_SCREENSHOTS,
  FAQ,
  FOR_YOU,
  FRAMEWORK,
  MODULES,
  NOT_FOR_YOU,
  OLD_WAY,
  STACK,
  STACK_TOTAL,
  TESTIMONIAL_VIDEOS,
  TICKER,
  TITAN_WAY,
} from "@/lib/content";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
const CODE = BRAND.publicCode;

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

export default function Page() {
  return (
    <>
      <a className="skip" href="#enroll">
        Skip to enrollment
      </a>

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
              <p className="eyebrow">The Day Trading Warrior Course · by Demark Davis</p>
              <h1 className="hero__h1">
                <span>Stop guessing.</span>
                <span className="red">Start executing.</span>
              </h1>
              <p className="hero__sub">
                A step-by-step price action system for <b>US30, Gold and futures</b>. Learn exactly what to look for, when to wait,
                and how much to risk, before you ever click buy.
              </p>
              <div className="hero__cta">
                <a href="#enroll" className="btn btn--red btn--lg">
                  Enroll in the course
                </a>
                <p className="hero__price">
                  <s>$1,600</s> <b>$1,200</b> with code <ApplyCodeLink code={CODE} className="code">{CODE}</ApplyCodeLink>
                </p>
              </div>
              <ul className="facts">
                <li>
                  <b>19</b> step-by-step modules
                </li>
                <li>
                  <b>Lifetime</b> access
                </li>
                <li>
                  <b>Telegram</b> room included
                </li>
              </ul>
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
              <p className="risknote">
                Trading involves risk. This program is educational only and does not guarantee results. Outcomes depend on your
                discipline, execution and market conditions.
              </p>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="sec sec--line" aria-labelledby="problem-h">
          <div className="wrap">
            <p className="eyebrow">Why most traders stay stuck</p>
            <h2 id="problem-h" className="h2">
              The market isn&rsquo;t your problem. <span className="red">Guessing is.</span>
            </h2>
            <p className="lede">
              Most traders react to the market instead of reading it. They jump between strategies, follow calls they don&rsquo;t
              understand, and let one bad trade turn into five. The difference isn&rsquo;t the market. It&rsquo;s the system.
            </p>

            <div className="versus">
              <div className="versus__col versus__col--old">
                <h3>
                  Without a system <span>confusion · emotion · inconsistency</span>
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
                  The Titan way <span>clarity · control · execution</span>
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
            <p className="motto">Trade what you see. Not what you want.</p>
          </div>
        </section>

        {/* INSTRUCTOR */}
        <section className="sec instructor" aria-labelledby="instructor-h">
          <div className="wrap instructor__grid">
            <figure className="instructor__photo">
              <img src={BRAND.instructorPhoto} alt="Demark Davis, founder of Market Titans" loading="lazy" />
              <figcaption>
                <b>Demark Davis</b>
                <span>Trader · Mentor · System builder</span>
              </figcaption>
            </figure>
            <div className="instructor__copy">
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

        {/* FRAMEWORK */}
        <section className="sec sec--line" aria-labelledby="framework-h">
          <div className="wrap">
            <p className="eyebrow">The framework</p>
            <h2 id="framework-h" className="h2">
              Every trade passes the same three checks.
            </h2>
            <ol className="steps">
              {FRAMEWORK.map((f, i) => (
                <li key={f.step} className="steps__item">
                  <span className="steps__tag">
                    {i + 1} · {f.step}
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CURRICULUM */}
        <section className="sec curriculum" aria-labelledby="curriculum-h">
          <div className="wrap curriculum__grid">
            <div className="curriculum__intro">
              <p className="eyebrow">What&rsquo;s inside</p>
              <h2 id="curriculum-h" className="h2">
                19 modules. <span className="red">In the order you need them.</span>
              </h2>
              <p className="lede">
                Start with the trader, then the chart, then execution. Each module builds on the last, so you&rsquo;re never
                guessing what to study next.
              </p>
              <p className="credential">
                <Check /> Official course completion credential included
              </p>
            </div>
            <ol className="modules">
              {MODULES.map((m, i) => (
                <li key={m.title} className="modules__item">
                  <span className="modules__n">Module {i + 1}</span>
                  <div>
                    <h3>{m.title}</h3>
                    <p>{m.body}</p>
                  </div>
                </li>
              ))}
              <li className="modules__item modules__item--locked">
                <span className="modules__n">Modules 9–19</span>
                <div>
                  <h3>+ {ADVANCED_MODULE_COUNT} advanced modules</h3>
                  <p>The full execution playbook unlocks inside the course once you&rsquo;ve built the foundation.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* PROOF */}
        <section className="sec sec--line proof" aria-labelledby="proof-h">
          <div className="wrap">
            <p className="eyebrow">Student stories</p>
            <h2 id="proof-h" className="h2">
              Don&rsquo;t take my word for it. <span className="red">Hear it from them.</span>
            </h2>
            <div className="vids">
              {TESTIMONIAL_VIDEOS.map((id, i) => (
                <VideoLite key={id} id={id} title={`Student testimonial ${i + 1}`} label="Student story" />
              ))}
            </div>

            <div className="chat">
              <div className="chat__head">
                <h3>Inside the Day Trading Warriors chat</h3>
                <p>Unedited screenshots from our private group. Swipe to scroll.</p>
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

        {/* FIT */}
        <section className="sec fit" aria-labelledby="fit-h">
          <div className="wrap">
            <p className="eyebrow">Is this for you?</p>
            <h2 id="fit-h" className="h2">
              Built for traders who are done winging it.
            </h2>
            <div className="fit__grid">
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
            <p className="eyebrow">Enroll</p>
            <h2 id="offer-h" className="h2">
              Everything you get <span className="red">today.</span>
            </h2>
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
                  </tfoot>
                </table>

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
                <OrderTicket />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec faq" aria-labelledby="faq-h">
          <div className="wrap faq__grid">
            <div>
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
          <div className="wrap final__in">
            <h2 className="final__h">
              The market opens tomorrow either way.
              <span className="red">Show up with a plan.</span>
            </h2>
            <a href="#enroll" className="btn btn--red btn--lg">
              Enroll for $1,200 with {CODE}
            </a>
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
