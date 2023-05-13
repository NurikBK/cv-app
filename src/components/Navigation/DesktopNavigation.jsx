import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import PhotoBox from '../PhotoBox';
import { navlinks } from '../../constants/navlinks.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import avatarImg from '../../assets/avatar.jpg';

const DesktopNavigation = () => {
  return (
    <div className="sticky">
      <PhotoBox
        avatar={avatarImg}
        width="100px"
        fontSize="1rem"
        name="Nurzhan Bizhan"
      />
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
    </div>
  );
};

export default DesktopNavigation;
