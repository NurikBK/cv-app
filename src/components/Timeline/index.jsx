import React from 'react';
import { StyledTimeline } from '../styles/Timeline.styled';

const Timeline = () => {
  return (
    <StyledTimeline>
      <ul className="timeline-list">
        <li>
          <div className="timeline-date">2001</div>
          <div className="general-event timeline-event">
            <div className="info">
              <h3>Title 0</h3>
              <p>
                Elit voluptate ad nostrud laboris. Elit incididunt mollit enim
                enim id id laboris dolore et et mollit. Mollit adipisicing
                ullamco exercitation ullamco proident aute enim nisi. Dolore eu
                fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do
                tempor fugiat minim do aliqua amet ex dolore velit.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </StyledTimeline>
  );
};

export default Timeline;
