import React from "react";
function useLocalStorage(ItemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [todos, setTodos] = React.useState(initialValue);
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageTodos = localStorage.getItem(ItemName);
          let parsedTodos;
  
          if (!localStorageTodos) {
            localStorage.setItem(ItemName, JSON.stringify(initialValue));
            parsedTodos = [];
          } else {
            parsedTodos = JSON.parse(localStorageTodos);
          }
          setTodos(parsedTodos);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 1000);
    });
  
    const saveTodos = (newTodos) => {
      try {
        const stringifiedTodos = JSON.stringify(newTodos);
        localStorage.setItem(ItemName, stringifiedTodos);
        setTodos(newTodos);
      } catch (error) {
        setError(error);
      }
    };
    return { todos, saveTodos, loading, error };
  }

  export default useLocalStorage