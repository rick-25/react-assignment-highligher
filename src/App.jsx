import React, { useState } from "react";

import "./App.css";

import AnotationList from "./components/AnotationList";
import AnotationWindow from "./components/AnotationWindow";
import RecordList from "./components/RecordList";

// import useLocalStorage from './hooks/localstorage';

function App() {
    const [records, setRecords] = useState([
        {
            _id: "1",
            title: "title",
            text: "hello guys, i am aditya, your best friend, please hangout with me at facebook live",
        },
    ]);
    const [tokenData, setTokenData] = useState({
        person: ["aditya", "friend"],
        org: ["facebook"],
    });

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
