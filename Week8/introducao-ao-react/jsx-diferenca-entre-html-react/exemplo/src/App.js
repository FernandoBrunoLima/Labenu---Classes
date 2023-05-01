import logo from "./logo.svg";
import "./App.css";

function App() {
  const resultadoDaSoma = (a, b) => {
    return a + b;
  };

  const cliente = "Astrodev";

  return (
    <div className="App">
      <header className="App-header">
        <h1>{cliente}</h1>
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
        <p>{resultadoDaSoma(10, 5)}</p>
      </header>
    </div>
  );
}

export default App;
