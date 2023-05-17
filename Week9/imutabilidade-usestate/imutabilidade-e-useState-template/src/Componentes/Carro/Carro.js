import { CarroContainer } from "./CarroStyles";

export function Carro({ model, color, year, flex, addBy }) {
  return (
    <CarroContainer>
      <h2>{model}</h2>
      <ul>
        <li>Cor: {color}</li>
        <li>Ano: {year}</li>
        <li>Flex: {flex ? "Sim" : "Não"}</li>
        <li>Adicionado: {addBy}</li>
      </ul>
    </CarroContainer>
  );
}
