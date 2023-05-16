import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button';
import { navlinks } from '../../constants/navlinks.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';

const DesktopNavigation = () => {
  const location = useLocation();
  return (
    <nav data-testid="desktop">
      <ul>
        {navlinks.map((link) => (
          <li
            key={link.id}
            className={location.hash === link.id ? 'active' : ''}
          >
            <i>
              <FontAwesomeIcon icon={link.icon} />
            </i>
            <HashLink to={link.id}>{link.title}</HashLink>
          </li>
        ))}
      </ul>
      <Link to="/">
        <Button icon={faChevronLeft} text="Go Back" padding="0.625em 1.25em" />
      </Link>
    </nav>
  );
};

export default DesktopNavigation;
