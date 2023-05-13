import React from 'react';
import { StyledExpertise } from '../styles/Expertise.styled';

const Expertise = () => {
  return (
    <StyledExpertise>
      <ul className="expertise-list">
        <li>
          <div className="expertise-list-date">
            <h3>Google</h3>
            <span className="date">2013-2014</span>
          </div>
          <div className="expertise-list-info">
            <h3>Front-end developer / php programmer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor
            </p>
          </div>
        </li>
        <li>
          <div className="expertise-list-date">
            <h3>Twitter</h3>
            <span className="date">2012</span>
          </div>
          <div className="expertise-list-info">
            <h3>Web developer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor
            </p>
          </div>
        </li>
      </ul>
    </StyledExpertise>
  );
};

export default Expertise;
