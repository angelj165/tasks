import React, { useState } from "react";

const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>(colors[0]);
    return (
        <div>
            <h3> Change Color </h3>
            {colors.map((color) => (
                <label key={color}>
                    <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={chosenColor === color}
                        onChange={() => {
                            setChosenColor(color);
                        }}
                    />
                    {color}
                </label>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: chosenColor,
                    width: "100px",
                    height: "100px",
                    marginTop: "10px",
                }}
            >
                {chosenColor}
            </div>
        </div>
    );
}
