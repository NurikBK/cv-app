import React from 'react';
import { StyledHomePage } from '../../components/styles/HomePage.styled';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const HomePage = () => {
  return (
    <StyledHomePage>
      <Link to="/inner">
        <Button text="Know more" />
      </Link>
    </StyledHomePage>
  );
};

export default HomePage;