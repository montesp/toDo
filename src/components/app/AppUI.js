import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButtom';
import { Main } from '../Main';
import { Header } from '../Header';
import '../../styles/App.css';

function AppUI({
    searchValue,
    setSearchValue,
    totalTodos,
    completedTodos,
    searchedTodos,
    completeTodo,
    deleteTodo,
}){
    return(
        <React.Fragment>
      <Header>
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoCounter
          total = {totalTodos}
          completed = {completedTodos}
         />
      </Header>

      <Main>
        <TodoList>
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
        <CreateTodoButton />
      </Main>
    </React.Fragment>
    )
}

export { AppUI };