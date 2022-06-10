import React from "react";

export default function Anotaion({ text, type }) {  
  return (
    <div
      className="anotaion"
      style={{
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      <span>{text}</span>
      <span>
        <b>{type}</b>
      </span>
      <button style={{ color: "blue" }}>X</button>
    </div>
  );
}
