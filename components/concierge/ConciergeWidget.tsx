"use client";

import { useState } from "react";
import { ConciergeButton } from "./ConciergeButton";
import { ConciergePanel } from "./ConciergePanel";

export function ConciergeWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ConciergeButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            <ConciergePanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
