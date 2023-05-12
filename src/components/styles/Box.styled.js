import styled from 'styled-components';

export const StyledBox = styled.div`
  padding: 2.5em 1.875em;
  margin-bottom: 3.125em;
  h2 {
    font-size: 1.5625rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 2.5em;
  }
`;
