import React from "react";

function TodoItem (props){
    const onComplete = () => {
        alert('Ya completaste el todo ' + props.text);
    }

    const onDelete = () => {
        alert('Borraste el todo ' + props.text);
    }



    return (
        <li className="TodoItem">
            <span
            className={`Icon ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
            >
            ✓
            </span>

            <p
            className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
            >
            {props.text}
            </p>

            <span
            className="Icon Icon-delete"
            onClick = { props.onDelete}
            >
            x
            </span>
        </li>
    );
}

export {TodoItem};