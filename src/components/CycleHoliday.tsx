import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    type Holiday = "🎄" | "🪔" | "🎃" | "🐇" | "🦃";

    const alphabeticalOrder: Record<Holiday, Holiday> = {
        "🎄": "🪔",
        "🪔": "🐇",
        "🐇": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
    };

    const yearOrder: Record<Holiday, Holiday> = {
        "🐇": "🪔",
        "🪔": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "🐇",
    };

    function advanceByAlphabet(): void {
        setHoliday(alphabeticalOrder[holiday]);
    }
    function advanceByYear(): void {
        setHoliday(yearOrder[holiday]);
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={advanceByAlphabet}> Advance by Alphabet </Button>
            <Button onClick={advanceByYear}> Advance by Year </Button>
        </div>
    );
}
