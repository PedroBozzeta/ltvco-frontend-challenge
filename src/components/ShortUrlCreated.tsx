import { CreateNewShortUrlResponse } from "../hooks/useCreateNewShortUrl";

interface ShortUrlCreatedProps {
  response: CreateNewShortUrlResponse;
}

const ShortUrlCreated = (props: ShortUrlCreatedProps) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center rounded  p-5 flex-column"
      style={{
        background:
          "linear-gradient(90deg,  rgba(163, 11, 76, 0.90) 7%, rgba(169, 12, 41, 0.90) 100%",
      }}
    >
        <h4 className="text-white montserrat-font">Your new shortened URL is:</h4>
       
      <div className="col-auto aling-center">
        <label htmlFor="url" className="form-label fw-bold">
          <a
            href={process.env.REACT_APP_API_URL + props.response.short_code}
            target="_blank"
                      rel="noreferrer"
                      className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            {"    "}

            {process.env.REACT_APP_API_URL + props.response.short_code}
          </a>
        </label>
      </div>
    </div>
  );
};

export default ShortUrlCreated;
