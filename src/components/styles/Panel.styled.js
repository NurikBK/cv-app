import styled from 'styled-components';

export const StyledPanel = styled.aside`
  background-color: ${({ theme }) => theme.colors.main};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.3em;
  transition: width 0.1s ease-in-out;
  width: ${({ width }) => width};
  flex: 1;
  img {
    margin-bottom: ${({ width }) => (width === '54px' ? '7.9em' : 0)};
  }

  .sticky {
    top: 20px;
    position: sticky;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    margin-top: 8em;
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1.3em;
    padding: 1.25em 0;
    i,
    a {
      text-transform: capitalize;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.dark};
      font-size: 1rem;
      font-weight: 600;
    }
    i {
      width: 14px;
    }
    &:hover a,
    &:hover i,
    &.active a,
    &.active i {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  .menu {
    cursor: pointer;
    position: absolute;
    right: ${({ width }) => (width === '54px' ? '-30px' : '-50px')};
    top: -85px;
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.secondary};
    border: none;
    width: 30px;
    aspect-ratio: 1;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 10px;
  }
`;
