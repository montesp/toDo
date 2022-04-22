import React from "react";

function CreateTodoButton(){
    const onClickButton = (msg) => {
        alert(msg)
    }
    
    return(
        <button
        type="button"
        className="buttonTodo"
        onClick={() => onClickButton('Aqui se deberia abrir el modal')}
        >
        +
        </button>
    );
}

export { CreateTodoButton };