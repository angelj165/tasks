import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempt, setAttempt] = useState<number>(3);
    const [quiz, setQuiz] = useState<boolean>(false);

    const start = () => {
        if (attempt > 0) {
            setAttempt(attempt - 1);
            setQuiz(true);
        }
    };

    const stop = () => {
        setQuiz(false);
    };

    const mulligan = () => {
        setAttempt((prev) => prev + 1);
    };

    return (
        <div>
            <div>{attempt}</div>
            <Button onClick={start} disabled={quiz || attempt === 0}>
                Start Quiz
            </Button>
            <Button onClick={stop} disabled={!quiz}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={quiz}>
                Mulligan
            </Button>
        </div>
    );
}
