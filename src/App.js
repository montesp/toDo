import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButtom';
// import './App.css';

const todos = [
  {text:'Tarea',completed: false },
  {text:'Tomar curso de react',completed: false },
  {text:'Ir por comida',completed: false },
  {text:'Sacar pasear al perro',completed: false },

]

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch/>
      <TodoList>
      {todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} /> //La propiedad key que pueda conocer el render de react cada elemento
        ))} 
      </TodoList>
      <CreateTodoButton />
    
    </React.Fragment> 
  );
}

export default App;
