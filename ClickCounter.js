import React, { Component } from 'react'

class ClickCounter extends Component {
    constructor() {
        super()

        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }
}

render(); {

    const { count } = this.state; 
    <button onClick = { this.incrementCount } > Click me(higher order Component) { count }
    times </button> 

}



export default ClickCounter;