import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { navlinks } from '../../constants/navlinks.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';

const MobileNavigation = () => {
  return (
    <>
      <nav className="sticky">
        <ul>
          {navlinks.map((link) => (
            <li key={link.id}>
              <HashLink to={link.id}>
                <FontAwesomeIcon icon={link.icon} />
              </HashLink>
            </li>
          ))}
        </ul>
        <Link to="/">
          <Button icon={faChevronLeft} padding="0.5em 1em" />
        </Link>
      </nav>
    </>
  );
};

export default MobileNavigation;
