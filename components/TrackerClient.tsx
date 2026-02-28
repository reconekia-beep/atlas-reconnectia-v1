"use client";

import { useEffect } from "react";
import { trackEvent } from "@/utils/tracking";

export function TrackerClient({ sessionId }: { sessionId: string }) {
    useEffect(() => {
        trackEvent("dashboard_loaded", sessionId);
    }, [sessionId]);

    return null;
}
