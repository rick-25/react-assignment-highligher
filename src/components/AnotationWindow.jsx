import React from "react";
import Header from "./shared/Header";

import "../css/anotationwindow.css";
import Pane from "./shared/Pane";
import Main from "./shared/Main";
import Button from "./Button";

import Highlighter from "react-highlight-words";

import Highlight from "./Highlight";

function AnotationWindow() {
  return (
    <Pane flex={"50%"}>
      <Header justify="flex-start">
        <Button title={"PERSON"} />
        <Button title={"ORG"} />
      </Header>
      <Main>
        <p
          style={{
            textAlign: "justify",
            margin: "20px",
            fontSize: "1.2rem",
            lineHeight: "1.5",
          }}
        >
          <Highlighter
            // highlightClassName="YourHighlightClass"
            searchWords={["and", "or", "the"]}
            autoEscape={true}
            textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
            highlightTag={Highlight}
          />
        </p>
      </Main>
    </Pane>
  );
}

export default AnotationWindow;
