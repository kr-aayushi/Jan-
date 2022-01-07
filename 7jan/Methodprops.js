import React, { Component } from "react";
import Child from "./Child";
class Methodprops extends Component {
    constructor(props) {
        super(props)
        this.state=
        {
            parentName :'Parent'
        }
        this.greetParent = this.greetParent.binding(this)
    }
        greetParent(){
            alert(`Hello ${this.state.parentName}`)
        
    }

render()
{
    return (
        <div>
                <Child />
        </div>
    )
}
}
export default Methodprops;