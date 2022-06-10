import React from 'react'
import Header from './shared/Header';

import '../css/recordlist.css';
import Pane from './shared/Pane';
import Main from './shared/Main';
import Record from './Record';

export default function RecordList() {
    const titles = ['asss', 'sfadfa', 'adfadfa', 'a', 'b', 'b', 'w', 's'];
    
    return (
        <Pane flex={"25%"}>
            <Header justify="center">
                <h3>Records</h3>
            </Header>   
            <Main>
                {titles.map((_, ind) => <Record title={_} key={ind}/>)}
            </Main>
        </Pane>
    )
}
