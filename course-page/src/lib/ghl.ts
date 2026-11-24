/**
 * Minimal GoHighLevel (LeadConnector) API v2 client for the course funnel.
 * Uses a Private Integration token with Contacts (+ optionally Opportunities) scopes.
 */
const BASE = "https://services.leadconnectorhq.com";

function cfg() {
  const token = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) throw new Error("GHL_API_KEY and GHL_LOCATION_ID must be set");
  return { token, locationId };
}

async function ghl<T = unknown>(path: string, init: { method?: string; body?: unknown } = {}): Promise<T> {
  const { token } = cfg();
  const res = await fetch(BASE + path, {
    method: init.method ?? "GET",
    headers: {
      Authorization: `Bearer ${token}`,
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

export type ContactInput = {
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  phone?: string;
  source?: string;
};

/** Creates or updates a contact (matched on email/phone) and returns its id. Does not touch existing tags. */
export async function upsertContact(input: ContactInput): Promise<string> {
  const { locationId } = cfg();
  const body: Record<string, unknown> = { locationId, email: input.email };
  for (const k of ["firstName", "lastName", "name", "phone", "source"] as const) {
    if (input[k]) body[k] = input[k];
  }
  const data = await ghl<{ contact?: { id: string } }>("/contacts/upsert", { method: "POST", body });
  if (!data.contact?.id) throw new Error("GHL upsert returned no contact id");
  return data.contact.id;
}

export async function addTags(contactId: string, tags: string[]) {
  await ghl(`/contacts/${contactId}/tags`, { method: "POST", body: { tags } });
}

export async function removeTags(contactId: string, tags: string[]) {
  await ghl(`/contacts/${contactId}/tags`, { method: "DELETE", body: { tags } });
}

export async function addNote(contactId: string, body: string) {
  await ghl(`/contacts/${contactId}/notes`, { method: "POST", body: { body } });
}

/** Optional: records the sale as a won opportunity when GHL_PIPELINE_ID and GHL_PIPELINE_STAGE_ID are set. */
export async function createWonOpportunity(contactId: string, name: string, valueDollars: number) {
  const pipelineId = process.env.GHL_PIPELINE_ID;
  const pipelineStageId = process.env.GHL_PIPELINE_STAGE_ID;
  if (!pipelineId || !pipelineStageId) return;
  const { locationId } = cfg();
  await ghl("/opportunities/", {
    method: "POST",
    body: { locationId, pipelineId, pipelineStageId, contactId, name, status: "won", monetaryValue: valueDollars },
  });
}

/** Tags used by the funnel. The GHL workflows trigger on these. */
export const TAGS = {
  checkoutStarted: "course-checkout-started",
  purchased: "course-purchased-web",
  buyer: "course buyer",
} as const;
