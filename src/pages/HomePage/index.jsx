import React from 'react';
import { StyledHomePage } from '../../components/styles/HomePage.styled';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import PhotoBox from '../../components/PhotoBox';

const HomePage = () => {
  return (
    <StyledHomePage>
      <PhotoBox
        width="163px"
        fontSize="2.8125rem"
        name="Nurzhan Bizhan"
        sub="Programmer. Creative. Innovator"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
      />
      <Link to="/inner">
        <Button text="Know more" />
      </Link>
    </StyledHomePage>
  );
};

export default HomePage;
