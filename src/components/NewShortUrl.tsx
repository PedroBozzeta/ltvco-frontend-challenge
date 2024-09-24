import { FormEvent, useState } from "react";
import Spinner from "./Spinner";
import { useCreateNewShortUrl } from "../hooks/useCreateNewShortUrl";
import LTVCoDescription from "./LTVCoDescription";
import LTVCoTitle from "./LTVCoTitle";
import ShortUrlCreated from "./ShortUrlCreated";
import styled from "styled-components";

// Styled-components
const FormContainer = styled.div`
  background: linear-gradient(
    90deg,
    rgba(244, 225, 231, 1) 7%,
    rgba(208, 189, 192, 1) 49%
  );
  border-radius: 10px;
  padding: 20px 0;
  margin-bottom: 20px;
`;

const FormButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ErrorMessage = styled.h5`
  color: red;
  margin-top: 1rem;
  text-align: center;
`;

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
        <LTVCoTitle>LTVCo Shortener</LTVCoTitle>

        <LTVCoDescription size="25">
          Shorten your links quickly and easily with LTVCo Shortener.
        </LTVCoDescription>

        <form onSubmit={handleSubmit}>
          <FormContainer className="row d-flex justify-content-center align-items-center">
            <div className="col-auto align-center">
              <label htmlFor="url" className="form-label fw-bold">
                URL:
              </label>
            </div>

            <div className="col-auto w-50">
              <input
                type="url"
                id="url"
                name="url"
                placeholder="Type a valid url"
                className="form-control"
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>

            <div className="col-auto">
              <FormButton
                type="submit"
                className="btn btn-dark"
                disabled={loading}
              >
                Submit
                {loading && <Spinner size="small" color="dark" />}
              </FormButton>
            </div>

            {error && <ErrorMessage>{error}</ErrorMessage>}
          </FormContainer>
              </form>
              

      {response && <ShortUrlCreated response={response} />}
          </div>
          
    </>
  );
};

export default NewShortUrl;
