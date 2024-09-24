
import { useFetchTop100Urls } from "../hooks/useFetchTop100Urls";
import ShortUrlTable from "./ShortUrlTable";

const Top100ShortUrls = () => {
  const { data, loading } = useFetchTop100Urls();

    if (loading) {
        return <h4>Loading...</h4>
    }
  return (
    <div className="w-100 h-100">
      <h3 className="montserrat-font fw-bolder fs-1 text-center">
        Top 100 most frequently accessed URLs
      </h3>
      {data && <ShortUrlTable data={data} />}
    </div>
  );
};

export default Top100ShortUrls;
