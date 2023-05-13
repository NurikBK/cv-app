import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import PhotoBox from '../PhotoBox';
import { navlinks } from '../../constants/navlinks.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import avatarImg from '../../assets/avatar.jpg';

const MobileNavigation = () => {
  return (
    <>
      <div className="sticky">
        <PhotoBox avatar={avatarImg} width="40px" fontSize="1rem" />
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
      </div>
    </>
  );
};

export default MobileNavigation;
