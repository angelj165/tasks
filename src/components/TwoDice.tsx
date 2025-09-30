import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [left, setLeft] = useState<number>(1);
    const [right, setRight] = useState<number>(2);
    const [message, setMessage] = useState<string>("");

    const checkGame = (leftDie: number, rightDie: number) => {
        setMessage(
            leftDie === 1 && rightDie === 1 ? "You lose!"
            : leftDie === rightDie ? "You win!"
            : "",
        );
    };

    const rollLeft = () => {
        const goLeft = d6();
        setLeft(goLeft);
        checkGame(goLeft, right);
    };

    const rollRight = () => {
        const goRight = d6();
        setRight(goRight);
        checkGame(left, goRight);
    };

    return (
        <span>
            <div> Two Dice </div>
            <div data-testid="left-die"> {left} </div>
            <div data-testid="right-die"> {right} </div>
            <Button onClick={rollLeft}> Roll Left</Button>
            <Button onClick={rollRight}> Roll Right</Button>
            {message && <div> {message} </div>}
        </span>
    );
}
