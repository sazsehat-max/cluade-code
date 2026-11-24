"use client";
import { useEffect } from "react";

/** Sends the Meta Pixel Purchase event once, if the pixel is installed. */
export default function PurchasePixel({ value, eventId }: { value: number; eventId: string }) {
  useEffect(() => {
    const key = `mt-purchase-${eventId}`;
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");
    } catch {
      /* storage blocked: still fire once per page load */
    }
    const w = window as unknown as { fbq?: (...a: unknown[]) => void };
    w.fbq?.("track", "Purchase", { value, currency: "USD" }, { eventID: eventId });
  }, [value, eventId]);
  return null;
}
