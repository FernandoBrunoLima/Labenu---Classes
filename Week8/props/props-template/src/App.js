import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  function apresentaGaragem(nome) {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  const fusca = {
    nome: "Fusca",
    cor: "preto",
    ano: 1972,
    flex: "sim",
  };

  const gol = {
    nome: "Gol",
    cor: "verde",
    ano: 2010,
    flex: "não",
  };

  const limousine = {
    nome: "Limosine",
    cor: "branco",
    ano: 2020,
    flex: "não",
  };

  const carroTunado = {
    nome: "Carro Tunado",
    cor: "branco",
    ano: 2020,
    flex: "não",
  };

  const carroBonito = {
    nome: "Carro bonito",
    cor: "branco",
    ano: 2020,
    flex: "não",
  };

  const carroMaravilhoso = {
    nome: "Carro maravilhoso",
    cor: "branco",
    ano: 2020,
    flex: "não",
  };

  return (
    <div className="App">
      <Garagem
        nomeGaragem="Faruqi"
        apresentaGaragem={apresentaGaragem}
        carro={fusca}
        carro2={gol}
        carro3={limousine}
      />

      <Garagem
        nomeGaragem="Garagina"
        apresentaGaragem={apresentaGaragem}
        carro={carroTunado}
        carro2={carroBonito}
        carro3={carroMaravilhoso}
      />
    </div>
  );
}
