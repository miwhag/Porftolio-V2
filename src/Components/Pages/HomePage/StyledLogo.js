import { ReactComponent as ReactLogo } from '../../../Images/miwha_img.svg'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import '../../../Styles/HomePage/HomePage.css'



const pulse = keyframes`
0% {
  transform: scale(0);
  opacity: 0.7;
  transform-origin: bottom;
}
100% {
  transform: scale(1.7);
  opacity: 0;
  transform-origin: right;
}
`;
export const StyledLogo = styled(ReactLogo)`
border: none;
width: 55em;
height: 50em;

#circle{
  animation: ${pulse} infinite 6s linear;
  transform-box: fill-box;

}
`
