import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");

    const handleUseAttempt = () => {
        setAttemptsLeft((prev) => Math.max(0, prev - 1));
    };

    const handleGainAttempts = () => {
        const attempts = parseInt(attemptsRequested);
        setAttemptsLeft((prev) => prev + (isNaN(attempts) ? 0 : attempts));
        setAttemptsRequested("");
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>
            <input
                type="number"
                value={attemptsRequested}
                onChange={(expected) => {
                    setAttemptsRequested(expected.target.value);
                }}
            />
            <button onClick={handleUseAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={handleGainAttempts}>Gain</button>
        </div>
    );
}
