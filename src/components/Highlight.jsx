import React from 'react'

import '../css/highlight.css';

export default function Highlight({ children, highlightIndex }) {
  return (
    <span className='highlight'>
        {children}
    </span>
  )
}
