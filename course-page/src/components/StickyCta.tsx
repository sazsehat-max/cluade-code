"use client";
import { useEffect, useState } from "react";

/** Mobile-only bar that appears after the hero and hides while the enrollment ticket is on screen. */
export default function StickyCta({ code }: { code: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("top");
    const enroll = document.getElementById("enroll");
    let pastHero = false;
    let atEnroll = false;
    const update = () => setShow(pastHero && !atEnroll);
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) pastHero = !e.isIntersecting;
        if (e.target === enroll) atEnroll = e.isIntersecting;
      }
      update();
    });
    if (hero) io.observe(hero);
    if (enroll) io.observe(enroll);
    return () => io.disconnect();
  }, []);
  return (
    <div className={`sticky${show ? " is-on" : ""}`} aria-hidden={!show}>
      <div className="sticky__price">
        <s>$1,600</s> <b>$1,200</b> <span>with {code}</span>
      </div>
      <a href="#enroll" className="btn btn--red" tabIndex={show ? 0 : -1}>
        Enroll
      </a>
    </div>
  );
}
