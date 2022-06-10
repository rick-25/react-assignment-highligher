import React from 'react'

import '../css/record.css';
import useStore from '../store';

export default function Record({title, id}) {
    const setSelectedRecord = useStore(state => state.setSelectedRecord);
  return (
    <div className="record" onClick={e => setSelectedRecord(id)}>
        {title}
    </div>
  )
}
