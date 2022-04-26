import React, {useContext} from 'react';
import { TodoContext } from '../contexts/todoContext';

function TodoCounter(){
    const {
        totalTodos,
        completedTodos,
    } = useContext(TodoContext);

    return (
        <h2 className='TodoCounter' >Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export { TodoCounter };