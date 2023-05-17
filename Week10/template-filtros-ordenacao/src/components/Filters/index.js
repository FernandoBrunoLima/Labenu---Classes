import { FiltersContainer } from "./style";

export function Filters(props) {
  return (
    <FiltersContainer>
      <input
        placeholder="Pesquisa"
        valor={props.query}
        onChange={(ev) => {
          props.setQuery(ev.target.value);
        }}
      />

      <input
        placeholder="Preço mínimo"
        type="number"
        valor={props.minPrice}
        onChange={(ev) => {
          props.setMinPrice(ev.target.value);
        }}
      />
      <input
        placeholder="Preço máximo"
        type="number"
        valor={props.maxPrice}
        onChange={(ev) => {
          props.setMaxPrice(ev.target.value);
        }}
      />
      <span for="sortingParameter">
        <label>Ordenar por:</label>
        <select
          name="sortingParameter"
          value={props.sortingParameter}
          onChange={(ev) => {
            props.setSortingParameter(ev.target.value);
          }}
        >
          <option value={"title"}>Título</option>
          <option value={"price"}>Preço</option>
          <option value={"dueDate"}>Prazo</option>
        </select>

        <select
          value={props.order}
          onChange={(ev) => {
            props.setOrder(ev.target.value);
          }}
        >
          <option value={"asc"}>Crescente</option>
          <option value={"desc"}>Decrescente</option>
        </select>
      </span>
    </FiltersContainer>
  );
}
