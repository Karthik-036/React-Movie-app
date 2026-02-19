import React, { Component } from 'react'

export class Prent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn : false
    }
  }
  render() {
    return(
      this.state.isLoggedIn?
      <div>welcome karthik</div> :
      <div>welcome guest</div>
    )
    // return (
    //   <div>
    //     <div>welcome guest</div>
    //     <div>welcome karthik</div>
    //   </div>
    // )
  }
}

export default Prent