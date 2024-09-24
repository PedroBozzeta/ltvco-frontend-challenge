import { ShortUlrResponse } from "../hooks/useFetchTop100Urls";

interface TableProps {
  data: ShortUlrResponse[];
}

const ShortUrlTable = (tableProps: TableProps) => {
  return (
    <div className="table-responsive-lg d-flex justify-content-center overflow-auto shadow-lg"   style={{ maxHeight: '800px', overflow: 'scroll' }}>
      <table className="table table-striped w-50 table-hover mh-75">
        <caption>Top 100 most visited Urls</caption>
        <thead className="table-dark">
          <tr className="text-center row">
            <th className="col-1">Top</th>
            <th className="col-3">Title</th>
            <th className="col-2">Visits</th>
            <th className="col-3">Original Url</th>
            <th className="col-3">ShortUrl</th>
          </tr>
        </thead>
        <tbody>
          {tableProps.data?.map((item, index) => (
            <tr key={item.code} className="row text-center ">
              <td className="col-1">{index + 1}</td>
              <td className="col-3 text-truncate text-start" >{item.title}</td>
              <td className="col-2">{item.click_count}</td>
              <td className="col-3 text-truncate text-start">{item.full_url}</td>
              <td className="col-3 text-start">
                <a
                  href={`${process.env.REACT_APP_API_URL + item.code}`}
                  target="_blank" rel="noreferrer"
                >{`${process.env.REACT_APP_API_URL + item.code}`}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShortUrlTable;