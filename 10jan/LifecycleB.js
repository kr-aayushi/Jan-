
import React, { Component } from 'react'

 class LifecycleB extends Component {
     
    constructor(props){
        super(props)
        this.state={
            name:'AAYUSHI'
        }
        console.log('Life cycle constructor B')
    }
   static getDerivedStateFromProps(props,state){
    console.log('LifecycleB getDerivedStateFromProps')
    return null
   }
   componentDidMount(){
       console.log('Lifecycle B componentDidMount')
   }

    render() 
    {
        console.log(' LIFECYCLE B RENDER Method')
        return (
            <div>
                LIFECYCLE B
            </div>
        )
    }
}
export default LifecycleB;

