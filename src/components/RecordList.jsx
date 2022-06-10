import React from 'react'
import Header from './shared/Header';

import '../css/recordlist.css';
import Pane from './shared/Pane';
import Main from './shared/Main';
import Record from './Record';

export default function RecordList({ records }) {
    return (
        <Pane flex={"25%"}>
            <Header justify="center">
                <h3>Records</h3>
            </Header>   
            <Main>
                {records.map((record, ind) => <Record title={record.title} key={ind}/>)}
            </Main>
        </Pane>
    )
}
