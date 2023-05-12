import styled from 'styled-components';
import BGIMG from '../../assets/main.png';

export const StyledHomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100dvw;
  height: 100dvh;
  background-image: url(${BGIMG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
