import React from 'react';
import { StyledFeedback } from '../styles/Feedback.styles';

const Feedback = () => {
  return (
    <StyledFeedback>
      <ul className="feedback">
        <li>
          <blockquote>
            <div className="info">
              <h3>fkfk</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.{' '}
              </p>
            </div>
            <div className="feedback-reporter">
              <img
                className="feedback-reporter-photo"
                src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"
                alt="Reporter"
              />
              <cite>
                A Game of Thrones,{' '}
                <a href="https://somesite.com">somesite.com</a>
              </cite>
            </div>
          </blockquote>
        </li>
      </ul>
    </StyledFeedback>
  );
};

export default Feedback;
