import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [userName, setUserName] = useState<string>("Your Name");
    const [editName, setEditName] = useState<boolean>(false);
    const [student, setStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <label className="form-switch">
                    Edit Mode:
                    <input
                        type="checkbox"
                        checked={editName}
                        onChange={() => {
                            setEditName(!editName);
                        }}
                    />
                </label>
            </div>
            {editName ?
                <div>
                    <input
                        type="text"
                        value={userName}
                        onChange={(event) => {
                            setUserName(event.target.value);
                        }}
                    />
                    <label>
                        Is a student:
                        <input
                            type="checkbox"
                            checked={student}
                            onChange={() => {
                                setStudent(!student);
                            }}
                        />
                    </label>
                </div>
            :   <p>
                    {userName} is {student ? "" : "not "}a student
                </p>
            }
        </div>
    );
}
