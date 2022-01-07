import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super()
        this.state = {
            username: '',
            comment: '',
            topic: '',


        }
    }
    handleUsernamechange = (event) => {
        this.setState({
        
            username: event.target.value
        })
        

    }
    handleCommentchange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }
    handleTopicchange = (event) => {
        
        this.setState({
            topic: event.target.value
        })
    }
    Submitchhange = () =>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
    }
    render() {
        return (
            <form onSubmit={this.Submitchhange}>
                <div>
                    <br></br>
                    <label>Username: </label>
                    <input type='text'
                        value={this.state.username}
                        onChange={this.handleUsernamechange} />
                        
                </div>
                <div>
                    <br></br>
                    <label>Message:</label>
                    <textarea value={this.state.comment}
                        onChange={this.handleCommentchange} />
                     
                </div>
                <div>
                    <br></br>
                    <label>Topic</label>
                    <select value={this.state.topic}
                        onChange={this.handleTopicchange}>
                        <option value="react" >React</option>
                        <option value="Angular" >Angular</option>
                        <option value="Vue" >vue</option>
                    </select>
                </div>
                <br></br>
                    <button>Submit</button>

            </form>

        )
    }
}
export default Form
