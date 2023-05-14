import styled from 'styled-components';

export const StyledSkills = styled.div`
  position: relative;
  .container {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    padding: 1.25em;
    border-radius: 5px;
    margin-bottom: 2.5rem;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.25em;
    margin-bottom: 1.25em;
    font-size: 0.875rem;
    position: relative;
    width: fit-content;
  }

  .wrapper input {
    padding: 0.625em;
    border-radius: 5px;
    border: 1px solid #667081;
    width: 270px;
  }

  .wrapper .error {
    text-transform: lowercase;
    color: #ff3333;
    position: absolute;
    right: 0;
    bottom: -18px;
    font-size: 0.8rem;
  }

  i {
    margin-right: 0.46875em;
  }

  .btn {
    cursor: pointer;
    padding: 0.625em 1.25em;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.secondary};
    border: none;
  }

  .btn-open {
    position: absolute;
    top: -100px;
    right: 0;
  }
  button:disabled {
    background-color: ${({ theme }) => theme.colors.dark};
  }

  .skill-range {
    background-color: ${({ theme }) => theme.colors.accent};
    padding: 0.32em 1em;
    margin-bottom: 0.32em;
  }

  .skill-range {
    h3 {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 1rem;
      font-weight: 400;
    }
  }

  .skills-grade {
    margin-top: 1.875em;
    position: relative;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  }

  .grade {
    position: absolute;
    color: ${({ theme }) => theme.colors.dark};
    font-size: 0.75rem;
    bottom: -25px;
  }
  .first::before,
  .second::before,
  .third::before,
  .fourth::before {
    content: '';
    position: absolute;
    top: -16px;
    height: 10px;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.dark};
  }
  .second::before,
  .third::before {
    left: 50%;
  }

  .first,
  .first::before {
    left: 0;
  }

  .second {
    transform: translateX(25%);
    left: 25%;
  }
  .third {
    transform: translateX(25%);
    right: 25%;
    width: 10ch;
  }
  .third::before {
    transform: translateX(-15px);
  }

  .fourth,
  .fourth::before {
    right: 0px;
  }

  @media (min-width: 800px) {
    .wrapper {
      flex-direction: row;
      align-items: center;
    }
  }
`;
