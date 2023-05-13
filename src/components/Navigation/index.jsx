import React, { useState } from 'react';
import DesktopNavigation from './DesktopNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileNavigation from './MobileNavigation';
import { StyledNavigation } from '../styles/Navigation.styled';
import useMediaQuery from '../../hooks/useMediaQuery';
import PhotoBox from '../PhotoBox';
import avatarImg from '../../assets/avatar.jpg';

const Navigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <StyledNavigation width={isCollapsed || isMobile ? '54px' : '250px'}>
      <div className="sticky">
        <PhotoBox
          avatar={avatarImg}
          width={isCollapsed || isMobile ? '40px' : '100px'}
          name={isCollapsed || isMobile ? '' : 'Nurzhan Bizhan'}
          fontSize="1rem"
        />
        {isCollapsed || isMobile ? <MobileNavigation /> : <DesktopNavigation />}
        {!isMobile && (
          <button
            className="menu"
            onClick={() => setIsCollapsed((prevState) => !prevState)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
