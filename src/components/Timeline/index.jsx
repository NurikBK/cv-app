import React from 'react';
import { StyledTimeline } from '../styles/Timeline.styled';

const Timeline = ({ data }) => {
  return (
    <StyledTimeline>
      <ul className="timeline-list">
        {data.map((item, index) => (
          <li key={index}>
            <div className="timeline-date">{item.date}</div>
            <div className="general-event timeline-event">
              <div className="info">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </StyledTimeline>
  );
};

export default Timeline;
