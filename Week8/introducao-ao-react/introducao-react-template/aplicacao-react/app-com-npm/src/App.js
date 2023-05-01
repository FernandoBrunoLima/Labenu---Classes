import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Bruno";

  const olaMundo = () => {
    alert("Olá, Mundo!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="meu-nome" onClick={olaMundo}>
          Clique em mim, {name}
        </button>
      </header>
    </div>
  );
}

export default App;
