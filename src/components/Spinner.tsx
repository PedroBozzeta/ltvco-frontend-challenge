import styled, { keyframes } from "styled-components";

interface SpinnerProps {
    size?: "small"|"medium"|"large";
  color?: "primary" | "secondary" | "dark"|"light";
}

const spinnerSizes={
    small: "15px",
    medium: "80px",
    large: "200px",
}

const spinnerColors = {
    primary: "blue",
    secondary: "green",
    dark: "black",
    light: "white"
}

const spin = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

const StyledSpinner = styled.div<SpinnerProps>`
  width: ${(props) => props.size ? spinnerSizes[props.size] : "medium" };
  height: ${(props) =>props.size ? spinnerSizes[props.size] : "medium" };
  border: ${(props) =>
    props?.size === "small" ? "2px" : props.size === "large" ? "6px" : "4px"} solid transparent;
  border-radius: 100%;
  border-top-color: ${(props) => props.color? spinnerColors[props.color]:"primary"};

  animation: ${spin} 1s infinite;
`;

const Spinner = (props: SpinnerProps) => {
  return <StyledSpinner size={props.size} color={props.color}></StyledSpinner>;
};

export default Spinner;