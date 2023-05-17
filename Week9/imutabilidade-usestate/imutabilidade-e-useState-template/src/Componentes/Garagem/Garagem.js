import { Carro } from "../Carro/Carro";
import { Botao, Estacionamento, GaragemContainer } from "./GaragemStyles";

export function Garagem({
  name,
  auto,
  setName,
  setAuto,
  carro1,
  carro2,
  carro3,
}) {
  const changeName = () => {
    if (name === "Labenu") {
      setName("Faruqi");
    } else {
      setName("Labenu");
    }
  };

  const changeAuto = (newCar) => {
    setAuto(newCar);
  };
  return (
    <GaragemContainer>
      <h1>Garagem da {name}</h1>
      <Botao onClick={changeName}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          model={auto.model}
          color={auto.color}
          year={auto.year}
          addBy={auto.addBy}
          flex={auto.flex}
        />
      </Estacionamento>
      <Botao onClick={() => changeAuto(carro1)}>Exibir Gol</Botao>
      <Botao onClick={() => changeAuto(carro2)}>Exibir Uno</Botao>
      <Botao onClick={() => changeAuto(carro3)}>Exibir Doblô</Botao>
    </GaragemContainer>
  );
}
