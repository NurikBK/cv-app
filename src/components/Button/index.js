import React from 'react';
import { StyledButton } from '../styles/Button.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ text, icon = null }) => {
  return (
    <StyledButton>
      {icon && <FontAwesomeIcon icon={icon} />}
      {text}
    </StyledButton>
  );
};

export default Button;
