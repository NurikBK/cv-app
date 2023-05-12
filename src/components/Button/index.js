import React from 'react';
import { StyledButton } from '../styles/Button.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ text, icon = null }) => {
  return (
    <StyledButton>
      {icon && (
        <i>
          <FontAwesomeIcon icon={icon} />
        </i>
      )}
      {text}
    </StyledButton>
  );
};

export default Button;
