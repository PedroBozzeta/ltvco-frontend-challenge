
import { ReactNode } from 'react';
import { styled } from 'styled-components';

export const StyleLTVCoDescription = styled.p<LTVCoDescriptionProps>`
  font-size: ${(props) => props.size ? props.size : "40"}px;
  line-height: 0.8;
`;

interface LTVCoDescriptionProps{
    children: ReactNode;
    size?: string;
}
const LTVCoDescription = (props:LTVCoDescriptionProps) => {
    
  return (
      <StyleLTVCoDescription size={props.size}>{props.children}</StyleLTVCoDescription>
  )
}

export default LTVCoDescription