import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  background-color: ${({ theme }) => theme.colors.darkBg};
  height: 3000px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .sticky {
    top: 20px;
    position: sticky;
    height: fit-content;
    width: 250px;
    padding: 1.3em;
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1.3em;
    padding: 1.25em 0;
  }

  li:hover a,
  li:hover i,
  li.active {
    color: ${({ theme }) => theme.colors.accent};
  }

  i {
    width: 14px;
  }

  i,
  a {
    text-transform: capitalize;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark};
    font-size: 1rem;
    font-weight: 600;
  }

  .menu {
    position: absolute;
    right: -30px;
    top: 20px;
    background-color: #222935;
    color: #fff;
    border: none;
    width: 30px;
    aspect-ratio: 1;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 10px;
  }
`;
