import React, { useEffect } from 'react';
import { StyledTimeline } from '../styles/Timeline.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTimeline } from '../../features/timeline/timelineSlice';

const Timeline = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.timeline.timeline);
  const status = useSelector((state) => state.timeline.status);
  const error = useSelector((state) => state.timeline.error);
  console.log(data);

  useEffect(() => {
    dispatch(fetchTimeline());
  }, [dispatch]);

  if (error) {
    return <p>{error} </p>;
  }

  return (
    <StyledTimeline>
      {status === 'loading' ? (
        <div>Loading...</div>
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
