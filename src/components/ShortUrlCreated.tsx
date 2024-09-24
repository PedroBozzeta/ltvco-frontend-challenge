import { CreateNewShortUrlResponse } from "../hooks/useCreateNewShortUrl";
import styled from "styled-components";

interface ShortUrlCreatedProps {
  response: CreateNewShortUrlResponse;
}

const Container = styled.div`
margin-top: 4 rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  padding: 1rem; 
  border-radius: 0.5rem; 
  background: linear-gradient(
    90deg,
    rgba(163, 11, 76, 0.9) 7%,
    rgba(169, 12, 41, 0.9) 100%
  );
  border: 4px dashed white;
  margin: 3rem auto;
`;

const Title = styled.h4`
  color: white;
`;

const UrlContainer = styled.div`
  text-align: center; 
`;

const UrlLabel = styled.label`
  font-weight: bold;
  color: white; 
`;

const ShortUrlLink = styled.a`
  color: rgba(255, 255, 255, 0.75); 
  text-decoration: underline;
  &:hover {
    color: rgba(255, 255, 255, 1); 
    text-decoration: none;
    opacity: 0.75; 
  }
`;

const ShortUrlCreated = (props: ShortUrlCreatedProps) => {
  return (
    <Container>
      <Title>Your new shortened URL is:</Title>
      <UrlContainer>
        <UrlLabel htmlFor="url">
          <ShortUrlLink
            href={process.env.REACT_APP_API_URL + props.response.short_code}
            target="_blank"
            rel="noreferrer"
          >
            {process.env.REACT_APP_API_URL + props.response.short_code}
          </ShortUrlLink>
        </UrlLabel>
      </UrlContainer>
    </Container>
  );
};

export default ShortUrlCreated;
