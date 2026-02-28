const ALLOWED_EVENTS = [
  "session_created",
  "chat_started",
  "dashboard_loaded",
  "cta_clicked",
  "concierge_opened",
  "concierge_cta_clicked",
];

const firedEvents = new Set<string>();

export async function trackEvent(
  event: string,
  session_id: string | null,
  metadata?: Record<string, unknown>
) {
  if (!ALLOWED_EVENTS.includes(event)) {
    console.warn("Invalid event:", event);
    return;
  }

  // Prevent duplicate events in same session lifecycle
  const eventKey = `${event}-${session_id}`;

  if (firedEvents.has(eventKey)) {
    return;
  }

  firedEvents.add(eventKey);

  try {
    await fetch("/api/atlas/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session_id,
        event,
        metadata: metadata ?? {},
      }),
    });
  } catch (err) {
    console.error("Tracking error:", err);
  }
}
