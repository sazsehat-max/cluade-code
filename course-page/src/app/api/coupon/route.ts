import { NextResponse } from "next/server";
import { quote } from "@/lib/offer";

/** Validates a coupon code and returns the resulting price. The checkout route re-checks it. */
export async function POST(req: Request) {
  const { code } = (await req.json().catch(() => ({}))) as { code?: unknown };
  const q = quote(code);
  if (!q || !q.code) {
    return NextResponse.json({ ok: false, error: "That code isn't valid. Check the spelling and try again." }, { status: 400 });
  }
  return NextResponse.json({ ok: true, quote: q });
}
