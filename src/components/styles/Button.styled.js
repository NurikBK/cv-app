import styled from 'styled-components';

export const StyledButton = styled.button`
  background: #222935;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: 400;
  font-size: 1rem;
  padding: 0.625em 1.25em;
  position: relative;
  z-index: 2000;
  i {
    margin-right: 0.8em;
    color: ${({ theme }) => theme.colors.secondary};
  }
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;
