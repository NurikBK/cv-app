import React from 'react';
import { StyledExpertise } from '../styles/Expertise.styled';

const Expertise = ({ data }) => {
  return (
    <StyledExpertise>
      <ul className="expertise-list">
        {data.map((item, index) => (
          <li key={index}>
            <div className="expertise-list-date">
              <h3>{item.info.company}</h3>
              <span className="date">{item.date}</span>
            </div>
            <div className="expertise-list-info">
              <h3>{item.info.job}</h3>
              <p>{item.info.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </StyledExpertise>
  );
};

export default Expertise;
