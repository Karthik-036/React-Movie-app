import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("hey wassup user")
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick