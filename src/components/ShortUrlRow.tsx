import styled from "styled-components";
import { ShortUlrResponse } from "../hooks/useFetchTop100Urls";

interface ShortUrlRowProps {
  item: ShortUlrResponse;
  index: number;
}

const Tooltip = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 10; /* Asegura que el tooltip esté por encima de otros elementos */
  visibility: hidden; /* Comienza oculto */
  opacity: 0; /* Comienza invisible */
  transition: visibility 0s, opacity 0.2s ease;
`;

// Componente estilizado para las celdas restringidas
const StyledCell = styled.td`
  max-width: 500px; /* Ajusta el ancho máximo según tus necesidades */
  overflow-x: hidden; /* Oculta el contenido que excede el ancho */
  text-overflow: ellipsis; /* Agrega "..." para el texto que no cabe */
  white-space: nowrap; /* Evita el salto de línea */
  text-align: start; /* Alineación del texto */
   &:hover ${Tooltip} {
    visibility: visible; /* Muestra el tooltip al hacer hover */
    opacity: 1; /* Hace el tooltip visible */
  }
    @media (max-width: 768px) {
    max-width: 300px; /* Ancho máximo para pantallas pequeñas */
  }

  @media (max-width: 480px) {
    max-width: 100px; /* Ancho máximo para pantallas muy pequeñas */
  }
`;

const ShortUrlRow = (props: ShortUrlRowProps) => {
  return (
    <tr className="text-center">
      <th scope="row">{props.index + 1}</th>
      <StyledCell>{props.item.title}<Tooltip>{`${props.item.title}`}</Tooltip> </StyledCell>
      <StyledCell>{props.item.click_count}</StyledCell>
      <StyledCell>{props.item.full_url}<Tooltip>{`${props.item.full_url}`}</Tooltip></StyledCell>
      <StyledCell>
        <a
          href={`${process.env.REACT_APP_API_URL}${props.item.code}`}
          target="_blank"
          rel="noreferrer"
        >
          {`${process.env.REACT_APP_API_URL}${props.item.code}`}
        </a>
      </StyledCell>
    </tr>
  );
};

export default ShortUrlRow;
