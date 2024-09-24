import { useFetchTop100Urls } from "../hooks/useFetchTop100Urls";
import ShortUrlTable from "./ShortUrlTable";
import Spinner from "./Spinner";
import LTVCoDescription from "./LTVCoDescription";
import LTVCoTitle from "./LTVCoTitle";

const Top100ShortUrls = () => {
  const { data, loading } = useFetchTop100Urls();

  return (
    <div>
      <LTVCoTitle>Top 100</LTVCoTitle>

      <LTVCoDescription>
        List of the first 100 most visites urls.
      </LTVCoDescription>

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
