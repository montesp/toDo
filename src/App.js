import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButtom';
import { Main } from './components/Main';
import { Header } from './components/Header';
import './App.css';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

const defaultTodos = [
  {text:'Tarea',completed: false },
  {text:'Tomar curso de react',completed: false },
  {text:'Ir por comida',completed: true },
  {text:'Sacar pasear al perro',completed: true },

]

function App(props) {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSeachValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  } else {

    searchedTodos = todos.filter(todo => {
      const todosText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todosText.includes(searchText);
    })
  }

  const completeTodo = (text)=> {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;

    setTodos(newTodos);
  }

  const deleteTodo = (text)=> {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }


  return (
    <React.Fragment>
      <Header>
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSeachValue}
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
  );
}

export default App;
