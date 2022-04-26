import React, {useContext} from "react";
import { TodoContext } from "../contexts/todoContext";

function CreateTodoButton(props){
    const {setOpenModal, openModal} = useContext(TodoContext)

    const onClickButton = () => {
        console.log(openModal);
        if(openModal){
            setOpenModal(false);
        } else {
            setOpenModal(true);
        }

    }

    return(
        <button
        type="button"
        className="buttonTodo"
        onClick={onClickButton}
        >
        +
        </button>
    );
}

export { CreateTodoButton };