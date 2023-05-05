import "../App.css";

export default function Cereal(props) {
  return (
    <div className="Cereal">
      <h3>nome: {props.name}</h3>
      <p>Sabor: {props.flavor}</p>
    </div>
  );
}
