import React, { useEffect } from 'react';
import { StyledTimeline } from '../styles/Timeline.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTimeline } from '../../features/timeline/timelineSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const Timeline = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.timeline.timeline);
  const status = useSelector((state) => state.timeline.status);
  const error = useSelector((state) => state.timeline.error);
 
  useEffect(() => {
    if (data.length < 3 ) {
      dispatch(fetchTimeline());
    }
  }, [dispatch, data]);

  if (status === 'failed' || error) {
    return (
      <div className="error">
        Something went wrong, please review your server connection
      </div>
    );
  }
  return (
    <StyledTimeline>
      {status === 'loading' ? (
        <div className="container">
          <FontAwesomeIcon icon={faRotate} className="rotate" />
        </div>
      ) : (
        <ul className="timeline-list">
          {data.map((item) => (
            <li key={item?.id}>
              <div className="timeline-date">{item?.date}</div>
              <div className="general-event timeline-event">
                <div className="info">
                  <h3>{item?.title}</h3>
                  <p>{item?.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </StyledTimeline>
  );
};

export default Timeline;
