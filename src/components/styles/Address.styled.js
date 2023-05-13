import styled from 'styled-components';

export const StyledAddress = styled.address`
  .wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 16px;
    gap: 1.25em;
  }
  i {
    font-size: 1.5rem;
    width: 1.5em;
    color: ${({ theme }) => theme.colors.accent};
  }
  .info a {
    color: #222935;
    text-decoration: none;
    font-weight: 700;
  }
  .info strong {
    font-weight: 700;
  }
`;
