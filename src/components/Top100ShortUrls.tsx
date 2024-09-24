import { useFetchTop100Urls } from "../hooks/useFetchTop100Urls";
import ShortUrlTable from "./ShortUrlTable";
import Spinner from "./Spinner";

const Top100ShortUrls = () => {
  const { data, loading } = useFetchTop100Urls();

  return (
    <div className="w-100 h-100">
      <h3 className="montserrat-font fw-bolder fs-1 text-center">
        Top 100 most frequently accessed URLs
      </h3>
      {loading && (
        <div className="d-flex justify-content-center">
          <Spinner size="large" color="dark" />
        </div>
      )}
      {data && <ShortUrlTable data={data} />}
    </div>
  );
};

export default Top100ShortUrls;
