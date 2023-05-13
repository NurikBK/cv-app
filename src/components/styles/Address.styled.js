import styled from 'styled-components';

export const StyledAddress = styled.address`
  dl {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 16px;
  }
  dl a {
    color: #222935;
  }
  dl strong {
    font-weight: 700;
  }
  dl dt {
    margin-right: 10px;
    color: #26c17e;
    font-size: 24px;
    min-width: 50px;
  }
  .info-box {
    margin-bottom: 50px;
  }
  .info-box h2 {
    color: #26c17e;
    margin-bottom: 40px;
    font: 700 25px/30px 'Open Sans', sans-serif;
  }
`;
