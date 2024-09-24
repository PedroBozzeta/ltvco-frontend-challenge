import { FormEvent, useState } from "react";
import Spinner from "./Spinner";
import { useCreateNewShortUrl } from "../hooks/useCreateNewShortUrl";

const NewShortUrl = () => {
  const [url, setUrl] = useState<string>("");

  const { loading, error, response, createNewShortUrl } =
    useCreateNewShortUrl();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createNewShortUrl(url);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="url" className="form-label">
              Url:
            </label>
            <input
              type="url"
              id="url"
              name="url"
              placeholder="Type a valid url"
              className="form-control"
              onChange={(e) => setUrl(e.target.value)}
              required
            ></input>

            {error && (
              <span className="text-danger m-2 fw-medium">{error}</span>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary d-flex align-items-center gap-2"
            disabled={loading}
          >
            Submit{loading && <Spinner size="small" color="dark"/>}
          </button>
        </form>
      </div>
      {response && (
        <h4>
          Nueva url{" "}
          <a
            href={process.env.REACT_APP_API_URL + response.short_code}
            target="_blank"
            rel="noreferrer"
          >
            {process.env.REACT_APP_API_URL + response.short_code}
          </a>
        </h4>
      )}
    </>
  );
};

export default NewShortUrl;
