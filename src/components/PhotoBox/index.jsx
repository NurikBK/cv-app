import React from 'react';
import { StyledPhotoBox } from '../styles/PhotoBox.styled';

const PhotoBox = ({
  avatar,
  width,
  fontSize,
  name = null,
  sub = null,
  text = null,
}) => {
  return (
    <StyledPhotoBox  width={width} fontSize={fontSize}>
      <img src={avatar} alt="avatar" />
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
