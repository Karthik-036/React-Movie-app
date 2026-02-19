import React, { Component } from 'react'

export class Classclick extends Component {
  clickHandler(){
    console.log("heyyyyy")
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.clickHandler()}>Click me</button>
      </div>
    )
  }
}

export default Classclick