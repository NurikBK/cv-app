import React, { useEffect, useRef, useState } from 'react';
import { StyledPortfolio } from '../styles/Portfolio.styled';
import Isotope from 'isotope-layout';
import project1Img from '../../assets/project1.png';

const Portfolio = () => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState('*');

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope('.filter-container', {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows',
    });
    // cleanup
    return () => isotope.current.destroy();
  }, []);

  // handling filter key change
  useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);
  return (
    <StyledPortfolio>
      <div className="tabs">
        <button className="active" onClick={handleFilterKeyChange('*')}>
          All
        </button>
        <button className="" onClick={handleFilterKeyChange('ui')}>
          UI
        </button>
        <button className="active" onClick={handleFilterKeyChange('code')}>
          Code
        </button>
      </div>
      <ul className="filter-container">
        <li className="filter-item ui">
          <img src={project1Img} alt="card" />
          <div className="portfolio-info">
            <h2>Some text</h2>
            <p>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis{' '}
            </p>
            <a href="https://somesite.com" target="_blank" rel="noreferrer">
              View source
            </a>
          </div>
        </li>
        <li className="filter-item code">
          <img src={project1Img} alt="card" />
          <div className="portfolio-info">
            <h2>Some text</h2>
            <p>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis{' '}
            </p>
            <a href="https://somesite.com" target="_blank" rel="noreferrer">
              View source
            </a>
          </div>
        </li>
        <li className="filter-item ui">
          <img src={project1Img} alt="card" />
          <div className="portfolio-info">
            <h2>Some text</h2>
            <p>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis{' '}
            </p>
            <a href="https://somesite.com" target="_blank" rel="noreferrer">
              View source
            </a>
          </div>
        </li>
        <li className="filter-item code">
          <img src={project1Img} alt="card" />
          <div className="portfolio-info">
            <h2>Some text</h2>
            <p>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis{' '}
            </p>
            <a href="https://somesite.com" target="_blank" rel="noreferrer">
              View source
            </a>
          </div>
        </li>
      </ul>
    </StyledPortfolio>
  );
};

export default Portfolio;
