import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButtom';
import { Main } from './components/Main';
import { Header } from './components/Header';
import './App.css';

const todos = [
  {text:'Tarea',completed: false },
  {text:'Tomar curso de react',completed: false },
  {text:'Ir por comida',completed: true },
  {text:'Sacar pasear al perro',completed: false },

]

function App(props) {
  return (
    <React.Fragment>
      <Header>
        <TodoSearch/>
        <TodoCounter />
      </Header>

      <Main>
        <TodoList>
        {todos.map(todo => (
              <TodoItem key={todo.text} text={todo.text} completed={todo.completed} /> //La propiedad key que pueda conocer el render de react cada elemento
          ))}
        </TodoList>
        <CreateTodoButton />
      </Main>
    </React.Fragment>
  );
}

export default App;
