import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [text, setText] = useState<boolean>(false);
    const revealAnswer = () => {
        setText((visible) => !visible);
    };

    return (
        <div>
            <Button onClick={revealAnswer}>Reveal Answer</Button>
            {text && <div>42</div>}
        </div>
    );
}
