function Carro(props) {
  console.log("Dentro do carro", props);
  console.log(props.carro);
  return (
    <div>
      <h2>Garagem de {props.carro.nome}</h2>
      <h2>{props.carro.nome}</h2>
      <ul>
        <li>Cor: {props.carro.cor}</li>
        <li>Ano: {props.carro.ano}</li>
        <li>Flex: {props.carro.flex}</li>
      </ul>
    </div>
  );
}

export default Carro;
