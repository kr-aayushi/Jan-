import React,{PureComponent} from "react";
import { Component } from "react";


    class PureComponents extends PureComponent {
        constructor() {
            super();
            this.state = {  
                count:1
            }
        }
        render() { 
            console.log("increase ");
            return (<div>PURE COMPONENT{this.state.count}
            <button onClick={()=>this.setState({count:this.state.count})}>Update me</button></div>

            );}
    }
     
  

export default PureComponents;