import React from "react";

import "../css/modal.css";

export default function Modal() {
    return (
        <div className="modal">
            <div className="popup-container">
                <h2>Are you sure you want to delete?</h2>
                <div className="button-container">
                    <button>Cancle</button>
                    <button style={{ backgroundColor: "red", color: "white" }}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
