import React from "react";

import extractAnotations from "../utils/extractAnotaions.js";

import Anotaion from "./Anotaion";
import Header from "./shared/Header";
import Main from "./shared/Main";
import Pane from "./shared/Pane";

export default function AnotationList({ record, tokenData }) {
    const anotations = extractAnotations(record.text, tokenData);
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
