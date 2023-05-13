import styled from 'styled-components';

export const StyledPortfolio = styled.div`
  img {
    max-width: 100%;
    object-fit: cover;
  }
  .tabs {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .tabs li {
    display: inline-block;
    padding: 0 0 0 10px;
    margin: 0 5px 0 0;
    position: relative;
    text-transform: capitalize;
  }
  .tabs li span {
    cursor: pointer;
  }
  .tabs li.active span {
    color: #26c17e;
  }
  .tabs li:first-child {
    padding: 0;
  }
  .tabs li:first-child:after {
    display: none;
  }
  .tabs li:after {
    content: '/';
    position: absolute;
    top: 0;
    left: 0;
  }
  .filter-container {
    overflow: hidden;
    position: relative;
    min-height: 200px;
    display: flex;
  }
  .filter-container li {
    width: 308px;
    margin: 0 20px 20px 0;
    position: relative;
    height: 194px;
    overflow: hidden;
  }
  .filter-container li .portfolio-info {
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
  }
  .filter-container li:hover .portfolio-info {
    top: 0;
  }
  .filter-container span {
    display: block;
  }
  .portfolio-info h2 {
    font: 700 16px/19px 'Open Sans', sans-serif;
    margin-bottom: 10px;
  }
  .portfolio-info p {
    margin-bottom: 10px;
  }
  .portfolio-info a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.dark};
  }

  .portfolio-info a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
