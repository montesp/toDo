import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './CreateTodoButtom';
import './App.css';

const todos = [
  {text:'Tarea',completed: false },
  {text:'Tomar curso de react',completed: false },
  {text:'Ir por comida',completed: false },
  {text:'Sacar pasear al perro',completed: false },

]

function App(props) {
  return (
    <React.Fragment>
      <TodoSearch/>
      <TodoCounter />
      <div className='main'>
        <TodoList>
        {todos.map(todo => (
              <TodoItem key={todo.text} text={todo.text} /> //La propiedad key que pueda conocer el render de react cada elemento
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </React.Fragment>
  );
}

export default App;
