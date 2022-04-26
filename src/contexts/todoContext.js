import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);

      const [searchValue, setSearchValue] = React.useState('');

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


    return(
        <TodoContext.Provider value={{
            loading,
            error,
            searchValue,
            setSearchValue,
            totalTodos,
            completedTodos,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider>

    );
}

export { TodoContext, TodoProvider };