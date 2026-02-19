import React, { Component } from 'react'

export class Eventbind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }
    }
    func(){
        this.setState({
            message:'good bye'
        })
    }
  render() {
    return (
      <div>Eventbind
        <div>{this.state.message}</div>
        <button onClick={()=>this.func()}>Click</button>
      </div>
    )
  }
}

export default Eventbind