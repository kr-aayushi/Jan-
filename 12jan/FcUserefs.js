import React, { useRef } from "react";
function FcUserefs() {
    let inputRef=useRef(null)
function handleI (){
    console.log("Function call")
    // inputRef.current.value="1000";
    inputRef.current.style.color="blue";
    inputRef.current.style.backgroundColor="yellow"
}
    return (
        <div>
            <h1> Using ref in functional Component</h1>
            <input type='text' ref={inputRef} ></input>
            <button onClick={handleI}>REF</button>
        </div>
    );
}

export default FcUserefs;