import React from "react";
import Anotaion from "./Anotaion";
import Header from "./shared/Header";
import Main from "./shared/Main";
import Pane from "./shared/Pane";

export default function AnotationList() {
  const anotations = [
    {
      text: "Aditya",
      type: "Person",
    },
    {
      text: "Amul",
      type: "Org",
    },
    {
      text: "Abhishek",
      type: "Person",
    },
  ];
  return (
    <Pane flex="25%">
      <Header justify="center">
        <h3>Anotations</h3>
      </Header>
      <Main>
        <div
          className="list-container"
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            overflow: "scroll",
          }}
        >
          {anotations.map((anotaion) => (
            <Anotaion {...anotaion} />
          ))}
        </div>
      </Main>
    </Pane>
  );
}
