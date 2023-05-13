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
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const isDesktop = isCollapsed || isMobile;

  return (
    <StyledNavigation width={isDesktop ? '54px' : '250px'}>
      <div className="sticky">
        <PhotoBox
          avatar={avatarImg}
          width={isDesktop ? '40px' : '100px'}
          name={isDesktop ? '' : 'Nurzhan Bizhan'}
          fontSize="1rem"
        />
        {isDesktop ? <MobileNavigation /> : <DesktopNavigation />}
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
