import { Tarefa } from "./ListaFinalizadasStyles";

export function ListaFinalizadas(props) {
  return (
    <Tarefa key={props.index}>
      <p>
        <del>{props.tarefa}</del>
      </p>
    </Tarefa>
  );
}
