import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [value, setValue] = useState<QuestionType>("short_answer_question");

    const ChangeType = () => {
        setValue((prev) =>
            prev === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    };

    return (
        <div>
            <Button onClick={ChangeType}>Change Type</Button>
            <div>
                {value === "multiple_choice_question" ?
                    "Multiple Choice"
                :   "Short Answer"}
            </div>
        </div>
    );
}
