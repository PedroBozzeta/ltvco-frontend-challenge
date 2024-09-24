import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 300px;
  width: 100%; 
`;

const StyledSvg = styled.svg`
  height: 100%; 
  width: 100%; 
  display: block; 
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
      <text x="98%" y="96%" textAnchor="end" fill="white" fontSize="5" fontFamily="Montserrat">
        © 2024 LTVCo Shortener. All rights reserved.
      </text>
    </StyledSvg>
  </StyledFooter>
  
  );
};

export default Footer;
