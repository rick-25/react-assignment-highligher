import React from 'react'

import '../../css/pane.css';

export default function Pane({ children , flex}) {
  return (
    <section className='pane' style={{flexBasis: flex}}>
        {children}
    </section>
  )
}
