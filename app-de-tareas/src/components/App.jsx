import React from "react";
import "./App.css";
import ListaDeTareas from "./ListaDeTareas/ListaDeTareas";

function App() {
  return (
    <div className="App">
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
