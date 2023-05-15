import styled from 'styled-components';

export const StyledTimeline = styled.div`
  min-height: 30vh;
  max-height: 80vh;
  overflow: auto;

  .timeline-list {
    position: relative;
    padding: 15px;
    li {
      display: flex;
      align-items: flex-start;
      margin-bottom: 10px;

      .timeline-date {
        padding: 15px;
        background: ${({ theme }) => theme.colors.secondary};
        position: relative;
        left: -15px;
      }

      .timeline-event {
        position: relative;
        background-color: #eee;
        padding: 1em;
        &:after {
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
      }
      &:last-child {
        margin: 0;
      }
    }
    &:before {
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
  }
  .info {
    h3 {
      font-size: 1rem;
      font-weight: 700;
    }
    p {
      font-size: 0.875rem;
      font-weight: 400;
    }
  }
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .rotate {
      padding: 1em;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.accent};
      animation: rotation 3s infinite linear;
    }

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
  }
`;
