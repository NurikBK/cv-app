import styled from 'styled-components';

export const StyledTimeline = styled.div`
  min-height: 30vh;
  max-height: 80vh;
  overflow: auto;

  .timeline-list {
    position: relative;
    padding: 15px;
  }
  .timeline-list:before {
    background: ${({ theme }) => theme.colors.accent};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 10px;
    width: 4px;
    content: '';
    margin-left: 18px;
    z-index: -1;
  }
  .timeline-list li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
  }
  .timeline-list li:last-child {
    margin: 0;
  }
  .timeline-list li .timeline-date {
    padding: 15px;
    background: ${({ theme }) => theme.colors.secondary};
    position: relative;
    left: -15px;
  }
  .timeline-list li .timeline-event {
    position: relative;
    background-color: #eee;
    padding: 1em;
  }
  .timeline-list li .timeline-event:after {
    content: '';
    position: absolute;
    top: 15px;
    left: -10px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid #eee;
  }

  .info h3 {
    font-size: 1rem;
    font-weight: 700;
  }
  .info p {
    font-size: 0.875rem;
    font-weight: 400;
  }
`;
