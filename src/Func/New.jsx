import React from 'react'
import { useState } from 'react'

function New() {
const [count,setCount]=useState(0)
  return (
    <div>
        <h1>count : {count}</h1>
        <button onClick={()=> setCount(count+1)}>Increase</button>
        <button onClick={()=> setCount(count-1)}>Decrease</button>
    </div>
  )
}

export default New