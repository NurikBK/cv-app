import styled from 'styled-components';

export const StyledBox = styled.div`
  padding: 0 2em;
  margin-bottom: 3.125em;
  width: 100%;
  &:first-child {
    padding-top: 2.5em;
  }
  h2 {
    font-size: 1.5625rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 2.5em;
  }
  @media (min-width: 1000px) {
    width: 80%;
  }
`;
