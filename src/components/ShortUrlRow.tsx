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
  z-index: 10; 
  visibility: hidden; 
  opacity: 0; 
  transition: visibility 0s, opacity 0.2s ease;
`;

const StyledCell = styled.td`
  max-width: 300px; 
  text-overflow: ellipsis; 
  white-space: wrap; 
  text-align: start; 

   &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1; 
  }
    @media (max-width: 768px) {
    max-width: 150px;
  }

  @media (max-width: 480px) {
    max-width: 100px; 
  }
`;

const ShortUrlRow = (props: ShortUrlRowProps) => {
  return (
    <tr className="text-center">
      <th scope="row">{props.index + 1}</th>
      <StyledCell className="visible">{props.item.title}<Tooltip>{`${props.item.title}`}</Tooltip> </StyledCell>
      <StyledCell className="text-center">{props.item.click_count}</StyledCell>
      <StyledCell className="visible text-truncate">{props.item.full_url}<Tooltip>{`${props.item.full_url}`}</Tooltip></StyledCell>
      <StyledCell>
     
        <a
          href={`${process.env.REACT_APP_API_URL}${props.item.code}`}
          target="_blank"
          rel="noreferrer"
        > <img src="./open-url.svg" alt="Icon" width="15" height="15" /> 
          {` ${process.env.REACT_APP_API_URL}${props.item.code}`}
        </a>
      </StyledCell>
    </tr>
  );
};

export default ShortUrlRow;
