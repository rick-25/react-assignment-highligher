import React from 'react'
import Header from './shared/Header';

import '../css/recordlist.css';
import Pane from './shared/Pane';
import Main from './shared/Main';
import Record from './Record';
import useStore from '../store';

export default function RecordList() {
    const records = useStore(state => state.records);
    return (
        <Pane flex={"25%"}>
            <Header justify="center">
                <h3>Records</h3>
            </Header>   
            <Main>
                {records.map((record, ind) => <Record title={record.title} key={record._id} id={record._id}/>)}
            </Main>
        </Pane>
    )
}
