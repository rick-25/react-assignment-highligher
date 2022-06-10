import React, { useState } from "react";
import "../css/button.css";

export default function Button({ title, onClickHandler }) {
  const [isActive, setIsActive] = useState(false);
  const activeStyle = { backgroundColor: "white", color: "rgb(76, 0, 255)" };
  return (
    <button
      className="button"
      onClick={(e) => {
        setIsActive(!isActive);
        onClickHandler();
      }}
      style={{
        ...(isActive && activeStyle),
      }}
    >
      {title}
    </button>
  );
}
