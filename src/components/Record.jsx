import React from "react";

import "../css/record.css";
import useStore from "../store";

export default function Record({ title, id }) {
    const setSelectedRecord = useStore((state) => state.setSelectedRecord);
    const selectedRecord = useStore((state) => state.selectedRecord);
    return (
        <div
            className="record"
            onClick={(e) => setSelectedRecord(id)}
            style={{
                ...(selectedRecord._id === id && {backgroundColor: 'white'}),
            }}
        >
            {title}
        </div>
    );
}
