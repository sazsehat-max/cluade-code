"use client";

/** Scrolls to the enrollment ticket and applies a code there. */
export default function ApplyCodeLink({ code, children, className }: { code: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href="#enroll"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent("mt:apply-code", { detail: code }))}
    >
      {children}
    </a>
  );
}
