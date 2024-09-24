import { ShortUlrResponse } from "../hooks/useFetchTop100Urls";
import styled from "styled-components";
import ShortUrlRow from "./ShortUrlRow";

interface TableProps {
  data: ShortUlrResponse[];
}

const StyledShortUrlTable = styled.div`
  max-width: 1500px; /* Máximo ancho */
  width: 100%; /* Asegura que el contenedor ocupe todo el ancho */
  margin: 0 auto; /* Centra el contenedor */
  padding: 10px; /* Espaciado interno */
  overflow-x: scroll;
`;

const StyledTable = styled.table`
  border-collapse: collapse; /* Elimina espacios entre celdas */
`;

const ShortUrlTable = (tableProps: TableProps) => {
  return (
    <StyledShortUrlTable>
      <StyledTable className="table table-sm table-light table-hover">
        <caption>Top 100 most visited Urls</caption>
        <thead className="table-dark text-center">
          <tr>
            <th scope="col">Top</th>
            <th scope="col">Title</th>
            <th scope="col">Visits</th>
            <th scope="col">Original Url</th>
            <th scope="col">ShortUrl</th>
          </tr>
        </thead>
        <tbody>
          {tableProps.data?.map((item, index) => (
            <ShortUrlRow item={item} key={item.code} index={index} />
          ))}
        </tbody>
      </StyledTable>
    </StyledShortUrlTable>
  );
};

export default ShortUrlTable;
