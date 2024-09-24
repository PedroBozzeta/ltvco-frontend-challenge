import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 80px; /* Altura fija para el footer */
  width: 100%; /* Asegura que el footer ocupe todo el ancho */
`;

const StyledSvg = styled.svg`
  height: 100%; /* Asegura que el SVG ocupe toda la altura del footer */
  width: 100%; /* Asegura que el SVG ocupe todo el ancho del footer */
  display: block; /* Evita espacios innecesarios alrededor del SVG */
`;

const StyledPath = styled.path`
  stroke: none;
  fill: #222; /* Color del SVG */
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSvg viewBox="0 0 500 150" preserveAspectRatio="none">
        <StyledPath d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" />
      </StyledSvg>
    </StyledFooter>
  );
};

export default Footer;
