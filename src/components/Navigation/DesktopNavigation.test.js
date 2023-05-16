import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/theme';
import { navlinks } from '../../constants/navlinks';
import { BrowserRouter } from 'react-router-dom';
import DesktopNavigation from './DesktopNavigation';

describe('DesktopNavigation component', () => {
  it('renders DesktopNavigation with data in props', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <DesktopNavigation data={navlinks} />
        </ThemeProvider>
      </BrowserRouter>
    );
    const links = navlinks.map((item, index) => screen.getByText(item.title));
    const button = screen.getByText(/go back/i);

    expect(button).toBeInTheDocument()
    links.forEach((el) => expect(el).toBeInTheDocument());
  });
});
