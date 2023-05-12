import React from 'react';
import avatarImg from '../../assets/avatar.jpg';
import { StyledPhotoBox } from '../styles/PhotoBox.styled';

const PhotoBox = () => {
  return (
    <StyledPhotoBox width="163px">
      <img src={avatarImg} alt="avatar" />
      <div>
        <h1>Nurzhan Bizhan</h1>
        <h3>Programmer. Creative. Innovator</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque{' '}
        </p>
      </div>
    </StyledPhotoBox>
  );
};

export default PhotoBox;
