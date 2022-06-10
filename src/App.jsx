import React, { useState } from "react";
import useStore from "./store.js";

import "./App.css";

import AnotationList from "./components/AnotationList";
import AnotationWindow from "./components/AnotationWindow";
import RecordList from "./components/RecordList";

// import useLocalStorage from './hooks/localstorage';

function App() {
    const records = useStore(state => state.records); 
    const tokenData = useStore(state => state.tokenData);

    return (
        <div className="App">
            <div className="container">
                <RecordList records={records} />
                <AnotationWindow
                    record={records[0]}
                    words={[...tokenData.person, ...tokenData.org]}
                />
                <AnotationList record={records[0]} tokenData={tokenData} />
            </div>
        </div>
    );
}

export default App;

// records
// [{
//     title, text, _id
// }]

// tokenData
// {
//     types: ['words']
// }
