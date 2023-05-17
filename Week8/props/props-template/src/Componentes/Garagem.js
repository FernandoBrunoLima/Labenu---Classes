import Carro from "./Carro";

function Garagem(props) {
  console.log("Na garagem", props);
  return (
    <div>
      <h1>Garagem de {props.nomeGaragem}</h1>
      <button onClick={() => props.apresentaGaragem(props.nomeGaragem)}>
        Apresentar a garagem
      </button>
      <Carro carro={props.carro} />
      <Carro carro2={props.carro2} />
      <Carro carro3={props.carro3} />
    </div>
  );
}

export default Garagem;
