import React from 'react';
import avatarImg from '../../assets/avatar.jpg';
import { StyledPhotoBox } from '../styles/PhotoBox.styled';

const PhotoBox = ({ name = null, sub = null, text = null }) => {
  return (
    <StyledPhotoBox width="163px">
      <img src={avatarImg} alt="avatar" />
      {name && (
        <div>
          <h1>{name}</h1>
          {sub && <h3>{sub}</h3>}
          {text && <p>{text}</p>}
        </div>
      )}
    </StyledPhotoBox>
  );
};

export default PhotoBox;
