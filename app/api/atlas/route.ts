import { NextResponse } from "next/server";
import { runAtlasEngine } from "@/lib/atlas/engine";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { responses, name, email, website } = body;

    if (!responses) {
      return NextResponse.json(
        { error: "Responses are required" },
        { status: 400 }
      );
    }

    // 1️⃣ Run deterministic engine
    const result = runAtlasEngine(responses);

    // 2️⃣ Save session in Supabase
    const { data, error } = await supabase
      .from("atlas_sessions")
      .insert([
        {
          name,
          email,
          website,
          responses,
          dimension_scores: result.dimension_scores,
          structural_index: result.structural_index,
          profile: result.profile,
          dashboard_limit: false,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Failed to save session" },
        { status: 500 }
      );
    }

    // 3️⃣ Return session id + result
    return NextResponse.json({
      success: true,
      session_id: data.id,
      result,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request format" },
      { status: 400 }
    );
  }
}
