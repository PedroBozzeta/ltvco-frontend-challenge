
import { ReactNode } from 'react';
import { styled } from 'styled-components';

export const StyledLTVCoTitle = styled.h1`
  font-size: 50px;
  margin-left: 10%;
  font-weight: 900;
`;

interface LTVCoTitleProps{
    children: ReactNode;
}
const LTVCoTitle = (props:LTVCoTitleProps) => {
  return (
      <StyledLTVCoTitle className='montserrat-font text-xl-start'>{props.children}</StyledLTVCoTitle>
  )
}

export default LTVCoTitle