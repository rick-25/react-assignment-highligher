import React from "react";
import Header from "./shared/Header";

import "../css/anotationwindow.css";
import Pane from "./shared/Pane";
import Main from "./shared/Main";
import Button from "./Button";

import Highlighter from "react-highlight-words";

import Highlight from "./Highlight";
import useStore from "../store";

function AnotationWindow() {
    const record = useStore((state) => state.selectedRecord);
    const tokenData = useStore(state => state.tokenData);

    const personActive = useStore((state) => state.isPersonHighlighed);
    const orgActive = useStore((state) => state.isOrgHighlighed);

    const personToggle = useStore((state) => state.tooglePersonHighlight);
    const orgToggle = useStore((state) => state.toogleOrgHighlight);

    return (
        <Pane flex={"50%"}>
            <Header justify="flex-start">
                <Button
                    title={"PERSON"}
                    isActive={personActive}
                    toggleActive={personToggle}
                />
                <Button
                    title={"ORG"}
                    isActive={orgActive}
                    toggleActive={orgToggle}
                />
            </Header>
            <Main>
                <p
                    style={{
                        textAlign: "justify",
                        margin: "20px",
                        fontSize: "1.2rem",
                        lineHeight: "2",
                    }}
                >
                    <Highlighter
                        // highlightClassName="YourHighlightClass"
                        searchWords={[
                            ...(personActive ? tokenData.person : []),
                            ...(orgActive ? tokenData.org : []),
                        ]}
                        autoEscape={true}
                        textToHighlight={record.text}
                        highlightTag={Highlight}
                    />
                </p>
            </Main>
        </Pane>
    );
}

export default AnotationWindow;
