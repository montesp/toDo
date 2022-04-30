import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/todoContext";
import './TodoForm.css';


function TodoForm() {
    const [newTodoValue, setNewTodoValue] = useState('');

    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form
        onSubmit={onSubmit}
        className='form-container'
        >
            <label className="title-form">Crea un nuevo to Do</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder="Escribe tu tarea"/>
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                >
                Cancelar
                </button>
                <button
                    type="submit"
                    onClick={onSubmit}
                >
                Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };