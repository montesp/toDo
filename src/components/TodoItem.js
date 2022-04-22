import React from "react";

function TodoItem (props){
    return (
        <li className="TodoItem">
            <a>✓</a>
            <p>{props.text}</p>
            <a>x</a>
        </li>
    );
}

export {TodoItem};