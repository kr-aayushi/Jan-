import React, { useState } from "react";

function If()
{
    const[loggedIn,setState1]=useState(6)
    return (<div>
        {loggedIn==1?<h1>Hello user 1!!!!!!!!!!!!!!!!!!!</h1>:loggedIn==2?<h1>Hello user 2!!!!!!!!!!!!!!!!!!!</h1>:<h1>Hello guest</h1>}
       
       </div>
    )
}
export default If;