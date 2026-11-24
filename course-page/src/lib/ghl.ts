/**
 * Minimal GoHighLevel (LeadConnector) API v2 client, used by the checkout function
 * to save the lead before sending them to the GHL order page.
 * Needs a Private Integration token with the Contacts scope.
 */
const BASE = "https://services.leadconnectorhq.com";

export type GhlConfig = { token: string; locationId: string };

async function ghl<T = unknown>(cfg: GhlConfig, path: string, init: { method?: string; body?: unknown } = {}): Promise<T> {
  const res = await fetch(BASE + path, {
    method: init.method ?? "GET",
    headers: {
      Authorization: `Bearer ${cfg.token}`,
      Version: "2021-07-28",
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "market-titans-course/1.0",
    },
    body: init.body === undefined ? undefined : JSON.stringify(init.body),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`GHL ${init.method ?? "GET"} ${path} -> ${res.status}: ${text.slice(0, 300)}`);
  return (text ? JSON.parse(text) : {}) as T;
}

export type ContactInput = { firstName?: string; email: string; phone?: string; source?: string };

/** Creates or updates a contact (matched on email/phone) and returns its id. Does not touch existing tags. */
export async function upsertContact(cfg: GhlConfig, input: ContactInput): Promise<string> {
  const body: Record<string, unknown> = { locationId: cfg.locationId, email: input.email };
  if (input.firstName) body.firstName = input.firstName;
  if (input.phone) body.phone = input.phone;
  if (input.source) body.source = input.source;
  const data = await ghl<{ contact?: { id: string } }>(cfg, "/contacts/upsert", { method: "POST", body });
  if (!data.contact?.id) throw new Error("GHL upsert returned no contact id");
  return data.contact.id;
}

export async function addTags(cfg: GhlConfig, contactId: string, tags: string[]) {
  await ghl(cfg, `/contacts/${contactId}/tags`, { method: "POST", body: { tags } });
}

/** Tags used by the funnel. GHL workflows trigger on these. */
export const TAGS = {
  checkoutStarted: "course-checkout-started",
  purchased: "course-purchased-web",
  buyer: "course buyer",
} as const;
