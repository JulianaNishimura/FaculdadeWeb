import React, { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Lista from "./components/lista/Lista";

function App() {
  const [professores, setProfessores] = useState( [] );

  const adicionaProf = (prof) => {
    console.log(prof)
  }

  return (
    <div>
      <Banner />
      <Formulario aoProfCadastrado={prof => adicionaProf(prof)} />
      <Lista objetos={professores}/>
    </div>
  );
}

export default App;