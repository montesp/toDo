import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Main } from '../Main';
import { Header } from '../Header';
import { TodoContext } from "../../contexts/todoContext";
import { Modal } from "../../modal/TodoModal";

import '../../styles/App.css';

function AppUI(){
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

    return(
        <React.Fragment>
      <Header>
        <TodoSearch/>
        <TodoCounter/>
      </Header>
      <Main>
        <TodoList>
            {error&& <p>Hubo un error</p>}
            {loading&& <p>Estamos cargando, no desesperes</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}
            {searchedTodos.map(todo => (
              <TodoItem
              key = {todo.text}
              text = {todo.text}
              completed = {todo.completed}
              onComplete = {() => completeTodo(todo.text)}
              onDelete = {()=> deleteTodo(todo.text)}
              /> //La propiedad key que pueda conocer el render de react cada elemento
            ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <p>{searchedTodos[0].text}</p>
          </Modal>
        )}

        <CreateTodoButton
           setOpenModal={setOpenModal}
         />
      </Main>
    </React.Fragment>
    )
}

export { AppUI };