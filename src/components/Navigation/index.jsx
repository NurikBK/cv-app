import React, { useState } from 'react';
import DesktopNavigation from './DesktopNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileNavigation from './MobileNavigation';
import { StyledNavigation } from '../styles/Navigation.styled';
import useMediaQuery from '../../hooks/useMediaQuery';

const Navigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <StyledNavigation width={isCollapsed ? '54px' : '250px'}>
      {isCollapsed || isMobile ? <MobileNavigation /> : <DesktopNavigation />}
      {!isMobile && (
        <button
          className="menu"
          onClick={() => setIsCollapsed((prevState) => !prevState)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
    </StyledNavigation>
  );
};

export default Navigation;
