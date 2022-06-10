import React from 'react'

import './App.css'

import AnotationList from './components/AnotationList'
import AnotationWindow from './components/AnotationWindow'
import RecordList from './components/RecordList'


function App() {
// const [records, setRecords] = localstorage('records', JSON.stringify(['']));
  
  return (
    <div className="App">
      <div className="container">
        <RecordList/> 
        <AnotationWindow/>
        <AnotationList/>
      </div>
    </div>
  )
}

export default App
