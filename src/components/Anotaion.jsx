import React from "react";
import useStore from "../store";

export default function Anotaion({ text, type , index}) {  
    const removeAnotation = useStore(state => state.removeAnotation);
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
      <button style={{ color: "blue" }} onClick={e => removeAnotation(index, text)}>X</button>
    </div>
  );
}
