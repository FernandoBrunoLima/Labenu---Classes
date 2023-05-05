import "./App.css";
import Cereal from "./components/Cereal";

export default function App() {
  return (
    <div className="App">
      <h1>Cereais da Labenu</h1>
      <Cereal name="Sucrilhos" flavor="Original" />
      <Cereal name="Sucrilhos" flavor="Chocolate" />
      <Cereal name="SnowFlakes" flavor="Morango" />
    </div>
  );
}
