import { StyledTimeline } from '../styles/Timeline.styled';
import { Slide } from 'react-awesome-reveal';

const Timeline = ({data}) => {

  return (
    <StyledTimeline>
      <Slide direction="right" triggerOnce={true} cascade={true}>
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
      </Slide>
    </StyledTimeline>
  );
};

export default Timeline;
