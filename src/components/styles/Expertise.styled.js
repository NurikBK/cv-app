import styled from 'styled-components';

export const StyledExpertise = styled.div`
  min-height: 30vh;
  max-height: 80vh;
  overflow: auto;

  .expertise-list li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1.875em;
  }
  .expertise-list-date {
    min-width: 160px;
    margin-right: 1.25em;
  }
  .expertise-list-date span {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 1rem;
  }
  .expertise-list-info {
    margin-top: 1.5em;
  }
  .expertise-list h3 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.625em;
  }
  .expertise-list p {
    font-size: 0.875rem;
    font-weight: 400;
  }
  @media (min-width: 800px) {
    .expertise-list li {
      flex-direction: row;
    }
    .expertise-list-info {
      margin-top: 0em;
    }
  }
`;
