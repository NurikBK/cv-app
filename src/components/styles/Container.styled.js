import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  main {
    display: flex;
    flex-direction: column;
  }

  .btn-fixed {
    position: fixed;
    bottom: 0;
    right: 30px;
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.secondary};
    padding: 1em 1em 0;
    border: none;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    font-size: 1rem;
    font-weight: 700;
  }
`;
