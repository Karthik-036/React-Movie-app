import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:''
      }
    }
    
    changecomments=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    changeusername=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    changetopic=event=>{
        this.setState({
            topic:event.target.value
        })
    }
    handlesubmit=event=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
  render() {
    return (
        <form onSubmit={this.handlesubmit}>
      <div>
        <label>Username</label>
        <input type="text" value={this.state.username} placeholder='Enter username' onChange={this.changeusername}></input>
      </div>
      <div>
        <label>Comments</label>
        <textarea value={this.state.comments} onChange={this.changecomments} >Type your comments</textarea>
      </div>
      <div>
        <label> Topic </label>
        <select value={this.state.topic} onChange={this.changetopic}>
            <option value="react">React</option>
            <option value="Angular">Angular</option>
            <option value="vue">Vue</option>
        </select>
      </div>
      <button>submit</button>
      </form>
      
    )
  }
}

export default Form