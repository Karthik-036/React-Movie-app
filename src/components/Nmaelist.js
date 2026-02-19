import React from 'react'

function Nmaelist() {
    const name=['karthik','pranay','sai']
    const nameList=name.map(name=><h2>{name}</h2>)
  return (
    <div>
        {/* <h1>{name[0]}</h1>
        <h1>{name[1]}</h1>
        <h1>{name[2]}</h1> */}
        {nameList}
    </div>
  )
}

export default Nmaelist