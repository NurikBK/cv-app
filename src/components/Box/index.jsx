import React from 'react';
import { StyledBox } from '../styles/Box.styled';

const Box = ({ title, children, id }) => {
  return (
    <StyledBox>
      <h2 id={id}>{title}</h2>
      {children}
    </StyledBox>
  );
};

export default Box;
