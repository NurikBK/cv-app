import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.dark};
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: 400;
  font-size: 1rem;
  padding: ${({ padding }) => padding};
  cursor: pointer;
  position: relative;
  z-index: 2000;
  i {
    color: ${({ theme }) => theme.colors.secondary} !important;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;
