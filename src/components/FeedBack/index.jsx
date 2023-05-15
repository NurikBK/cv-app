import React from 'react';
import { StyledFeedback } from '../styles/Feedback.styles';
import Info from '../Info';

const Feedback = ({ data }) => {
  return (
    <StyledFeedback>
      <ul className="feedback">
        {data.map((item, index) => (
          <li key={index}>
            <blockquote>
              <Info text={item.feedback} />
              <div className="feedback-reporter">
                <img
                  className="feedback-reporter-photo"
                  src={item.reporter.photoUrl}
                  alt="Reporter"
                />
                <cite>
                  <h3>{item.reporter.name}</h3>
                  <a href={item.reporter.citeUrl}>somesite.com</a>
                </cite>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </StyledFeedback>
  );
};

export default Feedback;
