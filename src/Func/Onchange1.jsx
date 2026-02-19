import React from 'react'
import { useState } from 'react'

function Onchange1() {
    const [name,setName]=useState('')
    const [age,setAge]=useState(0)

    function handlechange(e){
        setName(e.target.value);
    }
  return (
    <div>
        <input type='text' value={name} onChange={handlechange}></input>
        
        <input type='number' value={age} onChange={(e)=>{setAge(e.target.value)}}></input>
        <h1> hello {name} , 
            age : {age}
        </h1>
    </div>
  )
}

export default Onchange1