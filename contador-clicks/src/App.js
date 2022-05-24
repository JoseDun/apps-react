import "./App.css";
import logo from "./images/index";
import Boton from "./components/boton/boton";
import Contador from "./components/contador/Contador";
import { useState } from "react";

function App() {
  const [numClics, setNumClics]= useState(0)

  const manejarClic = ()=>{
    setNumClics(numClics+1)
  }
  const reiniciarContador = ()=>{
    setNumClics(numClics >= 0 ? 0 : false)
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img src={logo} alt="logo" className="freecodecamp-logo" />
      </div>
      <div className="contenedor-principal">
        <Contador
        numClics={numClics}
        />
        <Boton
        texto='Click'
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />


        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />
      </div>


    </div>
  );
}

export default App;
