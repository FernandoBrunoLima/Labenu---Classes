import React from "react";
import Carro from "./Carro";

export default function Garagem() {
  const name = "Bruno";

  return (
    <div className="Garagem">
      <h1>Garagem de {name}</h1>
      <section className="Carros">
        <Carro />
        <Carro />
        <Carro />
        <Carro />
      </section>
    </div>
  );
}
