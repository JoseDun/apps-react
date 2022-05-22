import "./TodoSearch.css";
import React from "react";
import { TodoContext } from "./TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue }= React.useContext(TodoContext)

  const onSearchValuechange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <>
      <input
        className="TodoSearch"
        placeholder="Busca los Todos."
        value={searchValue}
        onChange={onSearchValuechange}
      />

      <p>{searchValue}</p>
    </>
  );
}

export default TodoSearch;
