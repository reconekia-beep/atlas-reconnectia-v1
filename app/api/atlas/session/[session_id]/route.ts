import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ session_id: string }> }
) {
    try {
        const { session_id } = await params;

        if (!session_id) {
            return NextResponse.json(
                { error: "Session ID is required" },
                { status: 400 }
            );
        }

        const { data, error } = await supabase
            .from("atlas_sessions")
            .select("*")
            .eq("id", session_id)
            .single();

        if (error || !data) {
            console.error(error);
            return NextResponse.json(
                { error: "Session not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data,
        });
    } catch (error) {
        return NextResponse.json(
            { error: "Invalid request format" },
            { status: 400 }
        );
    }
}
