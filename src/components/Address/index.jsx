import React from 'react';
import { StyledAddress } from '../styles/Address.styled';
import { contacts } from '../../utils/contactsArr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Address = () => {
  return (
    <StyledAddress className="address">
      {contacts.map((contact, index) => (
        <div className="wrapper" key={index}>
          <i>
            <FontAwesomeIcon icon={contact.icon} />
          </i>
          <div className="info">
            <a href={contact.link}>{contact.title}</a>
            <br />
            {contact.info && <small>{contact.info}</small>}
          </div>
        </div>
      ))}
    </StyledAddress>
  );
};

export default Address;
