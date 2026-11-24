"use client";
import { useEffect, useRef, useState } from "react";
import { OFFER, formatUSD, type Quote } from "@/lib/offer";

const LIST = OFFER.listPriceCents;

/** Animates a dollar figure from one value to another, like a price ticking on a ladder. */
function useTicking(target: number) {
  const [shown, setShown] = useState(target);
  const from = useRef(target);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = from.current;
    if (reduce || start === target) {
      setShown(target);
      from.current = target;
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const dur = 750;
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = Math.round((start + (target - start) * eased) / 100) * 100;
      setShown(v);
      if (p < 1) raf = requestAnimationFrame(step);
      else from.current = target;
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return shown;
}

function readUtm(): Record<string, string> {
  const out: Record<string, string> = {};
  const p = new URLSearchParams(window.location.search);
  for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"]) {
    const v = p.get(k);
    if (v) out[k] = v;
  }
  return out;
}

export default function OrderTicket() {
  const [codeInput, setCodeInput] = useState("");
  const [applied, setApplied] = useState<Quote | null>(null);
  const [codeError, setCodeError] = useState("");
  const [checking, setChecking] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [notice, setNotice] = useState("");

  const total = applied?.totalCents ?? LIST;
  const shown = useTicking(total);

  async function applyCode(raw: string) {
    const code = raw.trim();
    if (!code) {
      setCodeError("Enter a code first.");
      return;
    }
    setChecking(true);
    setCodeError("");
    try {
      const res = await fetch("/api/coupon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setApplied(null);
        setCodeError(data.error || "That code isn't valid.");
      } else {
        setApplied(data.quote);
        setCodeInput(data.quote.code);
      }
    } catch {
      setCodeError("Couldn't check the code. Check your connection and try again.");
    } finally {
      setChecking(false);
    }
  }

  // Auto-apply ?code=TITAN25 links from ads and emails; show a note after a canceled checkout.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const code = p.get("code") || p.get("coupon");
    if (code) {
      setCodeInput(code.toUpperCase());
      void applyCode(code);
    }
    if (p.get("checkout") === "canceled") setNotice("Checkout was canceled, so you weren't charged. Your details are still here when you're ready.");
    const onApply = (e: Event) => {
      const c = (e as CustomEvent<string>).detail;
      setCodeInput(c);
      void applyCode(c);
    };
    window.addEventListener("mt:apply-code", onApply);
    return () => window.removeEventListener("mt:apply-code", onApply);
  }, []);

  function removeCode() {
    setApplied(null);
    setCodeInput("");
    setCodeError("");
  }

  async function checkout(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email, phone, code: applied?.code ?? "", utm: readUtm() }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error || "Checkout couldn't start. Try again in a moment.");
      const w = window as unknown as { fbq?: (...a: unknown[]) => void };
      w.fbq?.("track", "InitiateCheckout", { value: total / 100, currency: "USD" });
      window.location.assign(data.url);
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Checkout couldn't start.");
      setSubmitting(false);
    }
  }

  const filled = Boolean(applied?.code);

  return (
    <form className={`ticket${filled ? " is-filled" : ""}`} onSubmit={checkout} noValidate aria-labelledby="ticket-title">
      <div className="ticket__head">
        <span id="ticket-title" className="ticket__id">Enrollment ticket · MT-DTW</span>
        <span className="ticket__status" aria-live="polite">{filled ? "Code applied" : "Open"}</span>
      </div>

      <dl className="ticket__rows">
        <div className="ticket__row">
          <dt>Course</dt>
          <dd>Day Trading Warrior</dd>
        </div>
        <div className="ticket__row">
          <dt>Access</dt>
          <dd>Lifetime + Telegram room</dd>
        </div>
        <div className="ticket__row">
          <dt>List price</dt>
          <dd>
            <span className={`ticket__list${filled ? " is-struck" : ""}`}>{formatUSD(LIST)}</span>
          </dd>
        </div>
        {filled && applied ? (
          <div className="ticket__row ticket__row--disc">
            <dt>
              {applied.code} <span>−{applied.percentOff}%</span>
            </dt>
            <dd>−{formatUSD(applied.discountCents)}</dd>
          </div>
        ) : null}
      </dl>

      <div className="ticket__code">
        <label htmlFor="code">Coupon code</label>
        {filled ? (
          <div className="ticket__codeapplied">
            <span>
              <b>{applied?.code}</b> saves you {formatUSD(applied?.discountCents ?? 0)}
            </span>
            <button type="button" className="linkbtn" onClick={removeCode}>
              Remove
            </button>
          </div>
        ) : (
          <div className="ticket__codefield">
            <input
              id="code"
              name="code"
              autoComplete="off"
              autoCapitalize="characters"
              spellCheck={false}
              placeholder="Enter code"
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value.toUpperCase())}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  void applyCode(codeInput);
                }
              }}
              aria-invalid={Boolean(codeError)}
              aria-describedby={codeError ? "code-error" : undefined}
            />
            <button type="button" className="btn btn--ghost" onClick={() => applyCode(codeInput)} disabled={checking}>
              {checking ? "Checking…" : "Apply"}
            </button>
          </div>
        )}
        {codeError ? (
          <p id="code-error" className="ticket__err" role="alert">
            {codeError}
          </p>
        ) : null}
      </div>

      <div className="ticket__total">
        <span>Total today</span>
        <strong aria-live="polite" aria-atomic="true">
          {formatUSD(shown)}
        </strong>
        {filled ? (
          <span className="ticket__stamp" aria-hidden="true">
            Filled at {formatUSD(total)}
          </span>
        ) : null}
      </div>

      <fieldset className="ticket__fields">
        <legend>Where should we send your access?</legend>
        <div className="field">
          <label htmlFor="firstName">First name</label>
          <input id="firstName" name="firstName" autoComplete="given-name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" inputMode="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="phone">
            Phone <span className="field__opt">optional, for text reminders</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </fieldset>

      {notice ? <p className="ticket__notice">{notice}</p> : null}
      {formError ? (
        <p className="ticket__err" role="alert">
          {formError}
        </p>
      ) : null}

      <button type="submit" className="btn btn--red btn--block" disabled={submitting}>
        {submitting ? "Opening secure checkout…" : `Continue to secure checkout · ${formatUSD(total)}`}
      </button>
      <p className="ticket__fine">
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <path fill="currentColor" d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm-1 14-4-4 1.4-1.4L11 13.2l5.6-5.6L18 9l-7 7Z" />
        </svg>
        Payment handled by Stripe. Card, Apple Pay and Google Pay. Access emailed instantly.
      </p>
    </form>
  );
}
