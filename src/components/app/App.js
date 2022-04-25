import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../../hooks/useLocalStorage';

// const defaultTodos = [
//   {text:'Tarea',completed: false },
//   {text:'Tomar curso de react',completed: false },
//   {text:'Ir por comida',completed: true },
//   {text:'Sacar pasear al perro',completed: true },

// ]



function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

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

    saveTodos(newTodos);
  }

  const deleteTodo = (text)=> {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

 

  return (
    <AppUI
      loading={loading}
      error={error}
      searchValue={searchValue}
      setSearchValue={setSeachValue}
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
