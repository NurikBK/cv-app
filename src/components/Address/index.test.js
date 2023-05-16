import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/theme';
import Address from '.';
import { contacts } from '../../constants/contactsArr';

describe('Article component', () => {
  it('renders Address titles', () => {
    render(
      <ThemeProvider theme={theme}>
        <Address />
      </ThemeProvider>
    );
    const contactsTitle = contacts.map((contact, index) =>
      screen.getByText(contact.title)
    );
    contactsTitle.forEach((el) => expect(el).toBeInTheDocument());
  });
});
