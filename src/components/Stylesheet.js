import React from 'react'
import './style.css'

function Stylesheet(props) {
    let className= props.primary ? 'primary' :''
  return (
    <div>
        <h1 className={className}>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet