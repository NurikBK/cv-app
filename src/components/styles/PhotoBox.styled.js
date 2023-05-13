import styled from 'styled-components';

export const StyledPhotoBox = styled.div`
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  z-index: 100;
  gap: 10px;

  img {
    transition: width 0.1s ease-in-out;
    width: ${({ width }) => width};
    aspect-ratio: 1;
    border-radius: 100%;
    object-fit: cover;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }

  h1 {
    font-size: ${({ fontSize }) => fontSize};
    font-weight: 700;
    margin-bottom: 0.6em;
  }

  h3 {
    font-size: 1.4375rem;
    margin-bottom: 0.6em;
  }

  p {
    font-size: 0.9rem;
    width: 80ch;
    margin-bottom: 0.6em;
  }
`;
