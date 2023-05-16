import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { StyledPanel } from '../styles/Panel.styled';
import useMediaQuery from '../../hooks/useMediaQuery';
import PhotoBox from '../PhotoBox';
import avatarImg from '../../assets/avatar.jpg';
import MobileNavigation from '../Navigation/MobileNavigation';
import DesktopNavigation from '../Navigation/DesktopNavigation';

const Panel = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const isDesktop = isCollapsed || isMobile;

  return (
    <StyledPanel width={isDesktop ? '54px' : '250px'}>
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
            data-testid="menu"
            onClick={() => setIsCollapsed((prevState) => !prevState)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
      </div>
    </StyledPanel>
  );
};

export default Panel;
