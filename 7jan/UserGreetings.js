import React, { Component } from 'react'




class UserGreetings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false

        }
    }

    render() {
         return(
        
         this.state.isLoggedIn && <div>Welcome here</div>
        //  :<div>Get Lost</div> //TERNARY OPERATOR
        
         )
        // if (this.state.isLoggedIn)
        //     return ("Welcome here");
        // else
        //     return ("Get lost");
        //     return (
        //         <div>
        //            <h1>Hello Aayushi!!!!</h1>
        //         </div>
        //    )
    }
}
export default UserGreetings
