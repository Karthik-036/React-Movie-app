import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0
      }
    }
    change(){
        this.setState({
           count : this.state.count+1
        })
        //console.log(this.state.count)
    }
    change1(){
        this.setState({
           count : this.state.count-1
        })
        //console.log(this.state.count)
    }
    

  render() {
    return (
      <div>
        <div>counter - {this.state.count}</div>
        <button onClick={()=>this.change()} >Increment</button>
        <button onClick={()=>this.change1()}>Decrement</button>
      </div>
    )
  }
}

export default Counter