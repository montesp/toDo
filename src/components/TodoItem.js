import React from "react";

function TodoItem (props){
    return (
        <li className="TodoItem">
            <span className={`Icon ${props.completed && 'Icon-check--active'}`}>
            ✓
            </span>
            {console.log(props.completed)}

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
            </p>

            <span className="Icon Icon-delete">
            x
            </span>
        </li>
    );
}

export {TodoItem};