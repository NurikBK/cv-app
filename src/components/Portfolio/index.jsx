import React, { useEffect, useRef, useState } from 'react';
import { StyledPortfolio } from '../styles/Portfolio.styled';
import Isotope from 'isotope-layout';
import project1Img from '../../assets/project1.png';
import project2Img from '../../assets/project2.png';
import project3Img from '../../assets/project3.png';
import project4Img from '../../assets/project4.png';

const Portfolio = () => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState('*');
  const [activeButton, setActiveButton] = useState('*');

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

  const handleChange = (key) => () => {
    setActiveButton(key);
    setFilterKey(key);
  };
  return (
    <StyledPortfolio>
      <div className="tabs">
        <button
          className={activeButton === '*' ? 'active' : ''}
          onClick={handleChange('*')}
        >
          All
        </button>
        <button
          className={activeButton === 'ui' ? 'active' : ''}
          onClick={handleChange('ui')}
        >
          UI
        </button>
        <button
          className={activeButton === 'code' ? 'active' : ''}
          onClick={handleChange('code')}
        >
          Code
        </button>
      </div>
      <ul className="filter-container">
        <li className="filter-item ui">
          <img src={project1Img} alt="card1" />
          <div className="portfolio-info">
            <h2>Space Travel</h2>
            <p>In this project I used plain HTML, CSS and JS.</p>
            <a
              href="https://nurikbk.github.io/space-travel-site/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <br />
            {/* <a
              href="https://github.com/NurikBK/space-travel-site"
              target="_blank"
              rel="noreferrer"
            >
              View source
            </a> */}
          </div>
        </li>
        <li className="filter-item code">
          <img src={project2Img} alt="card2" />
          <div className="portfolio-info">
            <h2>Some text</h2>
            <p>In this project I used React, MUI and other React libs.</p>
            <a
              href="https://deft-bombolone-276339.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <br />
            {/* <a
              href="https://github.com/NurikBK/Admin-dashboard"
              target="_blank"
              rel="noreferrer"
            >
              View source
            </a> */}
          </div>
        </li>
        <li className="filter-item ui">
          <img src={project3Img} alt="card3" />
          <div className="portfolio-info">
            <h2>EVOGYM</h2>
            <p>In this project I used React TS with Tailwind.</p>
            <a
              href="https://stunning-sopapillas-08e964.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <br />
            {/* <a
              href="https://github.com/NurikBK/fitness-web-app"
              target="_blank"
              rel="noreferrer"
            >
              View source
            </a> */}
          </div>
        </li>
        <li className="filter-item code">
          <img src={project4Img} alt="card4" />
          <div className="portfolio-info">
            <h2>Split Landing Page</h2>
            <p>In this project I used plain HTML, CSS and JS.</p>
            <a
              href="https://nurikbk.github.io/split-landing-page/#"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <br />
            {/* <a
              href="https://github.com/NurikBK/split-landing-page"
              target="_blank"
              rel="noreferrer"
            >
              View source
            </a> */}
          </div>
        </li>
      </ul>
    </StyledPortfolio>
  );
};

export default Portfolio;
