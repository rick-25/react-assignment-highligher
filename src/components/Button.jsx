import React, { useState } from "react";
import "../css/button.css";

export default function Button({ isActive, toggleActive, title }) {
  const activeStyle = { backgroundColor: "white", color: "rgb(76, 0, 255)" };
  return (
    <button
      className="button"
      onClick={(e) => {
        toggleActive();
      }}
      style={{
        ...(isActive && activeStyle),
      }}
    >
      {title}
    </button>
  );
}
