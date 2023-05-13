import React from 'react';
import { StyledAddress } from '../styles/Address.styled';

const Address = () => {
  return (
    <StyledAddress className="address">
      <dl>
        <dt></dt>
        <dd>
          <a href="tel:+500 342 242">500 342 242</a>
        </dd>
      </dl>
      <dl>
        <dt></dt>
        <dd>
          <a href="mailto:office@kamsolutions.pl">office@kamsolutions.pl</a>
        </dd>
      </dl>
      <dl>
        <dt></dt>
        <dd>
          <strong>Twitter</strong>
          <br />{' '}
          <a href="https://twitter.com/wordpress">
            https://twitter.com/wordpress
          </a>
        </dd>
      </dl>
      <dl>
        <dt></dt>
        <dd>
          <strong>Facebook</strong>
          <br />{' '}
          <a href="https://www.facebook.com/facebook">
            https://www.facebook.com/facebook
          </a>
        </dd>
      </dl>
      <dl>
        <dt></dt>
        <dd>
          <strong>Skype</strong>
          <br /> <a href="skype:kamsolutions.pl">kamsolutions.pl</a>
        </dd>
      </dl>
    </StyledAddress>
  );
};

export default Address;
