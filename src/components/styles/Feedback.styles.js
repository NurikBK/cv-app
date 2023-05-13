import styled from 'styled-components';

export const StyledFeedback = styled.div`
  .feedback li {
    margin-bottom: 40px;
  }
  .feedback .info {
    margin-bottom: 10px;
  }
  .feedback-reporter {
    display: flex;
    align-items: center;
  }
  .feedback-reporter-photo {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 20px;
  }
  .feedback-reporter-photo img {
    width: 100%;
    height: auto;
  }
  .info {
    background: #eee;
    padding: 15px;
  }
  .info h3 {
    font: 700 16px/20px 'Open Sans', sans-serif;
  }
`;
