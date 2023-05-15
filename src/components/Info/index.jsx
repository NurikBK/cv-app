import React from 'react';
import { StyledInfo } from '../styles/Info.styled';

const Info = ({ text }) => {
  return (
    <StyledInfo>
      <p>{text}</p>
    </StyledInfo>
  );
};

export default Info;
