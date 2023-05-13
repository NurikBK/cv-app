import React from 'react';
import { StyledPortfolio } from '../styles/Portfolio.styled';

const Portfolio = () => {
  return (
    <StyledPortfolio>
      <ul className="tabs">
        <li className="active">
          <span> all </span>
        </li>
        <li className="">
          <span> ui </span>
        </li>
        <li className="">
          <span> code </span>
        </li>
      </ul>
      <ul
        className="filter-container"
        style={{ position: 'relative', height: '428px' }}
      >
        <li
          className="filter-item ui"
          style={{ position: 'absolute', left: '40px', top: '0' }}
        >
          <img src="static/media/card_1.b1844ee5.jpg" alt="card" />
          <div className="portfolio-info">
            <h2>Some text</h2>
            <p>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis{' '}
            </p>
            <a href="https://somesite.com">View source</a>
          </div>
        </li>
        <li
          className="filter-item code"
          style={{ position: 'absolute', left: '368px', top: '0px' }}
        >
          <img src="static/media/card_3.608e2b77.png" alt="card" />
          <div className="portfolio-info">
            <h2>Some text</h2>
            <p>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis{' '}
            </p>
            <a href="https://somesite.com">View source</a>
          </div>
        </li>
        <li
          className="filter-item ui"
          style={{ position: 'absolute', left: '40px', top: '214px' }}
        >
          <img src="static/media/card_1.b1844ee5.jpg" alt="card" />
          <div className="portfolio-info">
            <h2>Some text</h2>
            <p>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis{' '}
            </p>
            <a href="https://somesite.com">View source</a>
          </div>
        </li>
        <li
          className="filter-item code"
          style={{ position: 'absolute', left: '368px', top: '214px' }}
        >
          <img src="static/media/card_3.608e2b77.png" alt="card" />
          <div className="portfolio-info">
            <h2>Some text</h2>
            <p>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis{' '}
            </p>
            <a href="https://somesite.com">View source</a>
          </div>
        </li>
      </ul>
    </StyledPortfolio>
  );
};

export default Portfolio;