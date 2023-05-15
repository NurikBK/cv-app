import styled from 'styled-components';

export const StyledPortfolio = styled.div`
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
  .tabs {
    font-size: 16px;
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
    button {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.accent};
      font-family: 'Open-sans', sans-serif;
      border: none;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      padding: 0.5em 1em;
      cursor: pointer;

      &.active {
        color: ${({ theme }) => theme.colors.main};
      }
      &:active {
        scale: 0.98;
      }
      &.active span {
        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }

  .filter-container {
    overflow: hidden;
    position: relative;
    min-height: 200px;
    display: flex;

    li {
      width: 308px;
      margin: 0 20px 20px 0;
      position: relative;
      height: 194px;
      overflow: hidden;
      .portfolio-info {
        height: 194px;
        overflow: auto;
        position: absolute;
        left: 0;
        padding: 20px 15px;
        background: hsla(0, 0%, 100%, 0.95);
        border: 1px solid #ddd;
        box-sizing: border-box;
        top: 100%;
        transition: all 0.5s ease 0s;
        h2 {
          font: 700 16px/19px 'Open Sans', sans-serif;
          margin-bottom: 10px;
        }
        p {
          margin-bottom: 10px;
        }
        a {
          text-decoration: underline;
          color: ${({ theme }) => theme.colors.dark};
        }
        &:hover {
          color: ${({ theme }) => theme.colors.accent};
        }
      }
      &:hover .portfolio-info {
        top: 0;
      }
    }
    span {
      display: block;
    }
  }
`;
