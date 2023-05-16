import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/theme';
import { navlinks } from '../../constants/navlinks';
import { BrowserRouter } from 'react-router-dom';
import MobileNavigation from './MobileNavigation';

describe('MobileNavigation component', () => {
  it('renders MobileNavigation with data in props', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <MobileNavigation data={navlinks} />
        </ThemeProvider>
      </BrowserRouter>
    );
    const icons = navlinks.map((item, index) => screen.getByTestId(item.id));
    const button = screen.getByTestId(/back/i);

    expect(button).toBeInTheDocument();
    icons.forEach((el) => expect(el).toBeInTheDocument());
  });
});
