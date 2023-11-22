import React from "react";
import './input.css'
function Input(){
    return(
        <div className="container">
            <input type="text" className="input" />
            <input type="button" value="Send" className="button"/>
        </div>
    )
}
export default Input;