import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import PhotoBox from '../PhotoBox';
import { navlinks } from '../../utils/navlinks_constants.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { StyledNavigation } from '../styles/Navigation.styled';

const Navigation = () => {
  return (
    <StyledNavigation>
      <div className="sticky">
        <PhotoBox width="100px" fontSize="1rem" name="Nurzhan Bizhan" />
        <ul>
          {navlinks.map((link) => (
            <li key={link.id}>
              <i>
                <FontAwesomeIcon icon={link.icon} />
              </i>
              <a href={link.id}>{link.title}</a>
            </li>
          ))}
        </ul>
        <Link to="/">
          <Button icon={faChevronLeft} text="Go Back" />
        </Link>
      </div>
      <button className="menu">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </StyledNavigation>
  );
};

export default Navigation;
