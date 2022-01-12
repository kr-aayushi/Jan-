import React,{forwardRef} from 'react'
function User1(props,ref)
{
    return(
        <div>
            <input ref={ref} type="text" />
        </div>
    )
}

export default forwardRef(User1);