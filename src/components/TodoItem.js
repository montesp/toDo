import React from "react";

function TodoItem (props){
    return (
        <li className="TodoItem">
            <p>{props.text}</p>
        </li>
    );
}

export {TodoItem};