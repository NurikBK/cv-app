import styled from 'styled-components';
import BGIMG from '../../assets/main.png';

export const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100dvw;
  height: 100dvh;
  background-image: url(${BGIMG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
