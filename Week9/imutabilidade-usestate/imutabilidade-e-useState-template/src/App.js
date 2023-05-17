import { Garagem } from "./Componentes/Garagem/Garagem";
import { GlobalStyled } from "./GlobalStyled";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Labenu");
  const [automobile, setAuto] = useState({
    model: "Fusca",
    color: "Preto",
    year: 1972,
    flex: true,
    addBy: "Bruno",
  });

  const gol = {
    model: "Gol",
    color: "Branco",
    year: 1992,
    flex: true,
    addBy: "Bruno",
  };

  const uno = {
    model: "Uno",
    color: "Verde",
    year: 1998,
    flex: false,
    addBy: "Bruno",
  };

  const doblo = {
    model: "Doblô",
    color: "Cinza",
    year: 2005,
    flex: true,
    addBy: "Bruno",
  };
  return (
    <div className="App">
      <GlobalStyled />

      <Garagem
        name={name}
        setName={setName}
        auto={automobile}
        setAuto={setAuto}
        carro1={gol}
        carro2={uno}
        carro3={doblo}
      />
    </div>
  );
}
