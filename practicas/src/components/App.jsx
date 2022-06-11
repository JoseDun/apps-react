import FormToUseEffect from "./FormToUseEffect";
import PintarDatos from "./PintarDatos";
import { useEffect, useState } from "react";
const App = () => {
  const [nombrePersonaje, setNombrePersonaje] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("nombreApi");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem("nombreApi", JSON.stringify(nombrePersonaje));
  }, [nombrePersonaje]);

  /*   const test = () => {
    console.log(localStorage.getItem("nombreApi"));
    if (localStorage.getItem("nombreApi")) {
      setNombrePersonaje(JSON.parse(localStorage.getItem("nombreApi")));
    }
  }, []); */

  return (
    <div className="container">
      <h1>App Rick and Morthy</h1>
      <FormToUseEffect setNombrePersonaje={setNombrePersonaje} />
      <PintarDatos nombrePersonaje={nombrePersonaje} />
    </div>
  );
};

export default App;
