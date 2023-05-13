import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { navlinks } from '../../constants/navlinks.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';

const DesktopNavigation = () => {
  return (
    <nav>
      <ul>
        {navlinks.map((link) => (
          <li key={link.id}>
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
