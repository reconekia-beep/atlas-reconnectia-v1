import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

const ALLOWED_EVENTS = [
  "session_created",
  "chat_started",
  "dashboard_loaded",
  "cta_clicked",
];

function isValidUUID(value: string) {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(value);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { session_id, event, metadata } = body;

    if (!event || !ALLOWED_EVENTS.includes(event)) {
      return NextResponse.json(
        { error: "Invalid event type" },
        { status: 400 }
      );
    }

    if (session_id && !isValidUUID(session_id)) {
      return NextResponse.json(
        { error: "Invalid session_id format" },
        { status: 400 }
      );
    }

    const safeMetadata =
      typeof metadata === "object" && metadata !== null
        ? metadata
        : {};

    const { error } = await supabaseAdmin
      .from("atlas_events")
      .insert([
        {
          session_id: session_id || null,
          event,
          metadata: safeMetadata,
        },
      ]);

    if (error) {
      console.error("Failed to track event:", error);
      return NextResponse.json(
        { error: "Failed to track event" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request format" },
      { status: 400 }
    );
  }
}
