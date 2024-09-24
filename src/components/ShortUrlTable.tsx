import { ShortUlrResponse } from "../hooks/useFetchTop100Urls";
import styled from "styled-components";
import ShortUrlRow from "./ShortUrlRow";

interface TableProps {
  data: ShortUlrResponse[];
}

const StyledShortUrlTable = styled.div`
  max-width: 1500px; 
  width: 100%; 
  margin: 0 auto; 
  padding: 10px; 
  overflow-x: scroll;
  
  @media (max-width: 1500px) {
    .visible{
        display:none;
    }
  }
`;

const StyledTable = styled.table`
  border-collapse: collapse; 
`;

const ShortUrlTable = (tableProps: TableProps) => {
  return (
    <StyledShortUrlTable>
      <StyledTable className="table table-sm table-light table-hover">
        <caption>Top 100 most visited Urls</caption>
        <thead className="table-dark text-center">
          <tr>
            <th scope="col">Top</th>
            <th scope="col" className="visible">Title</th>
            <th scope="col">Visits</th>
            <th scope="col" className="visible">Original Url</th>
            
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
