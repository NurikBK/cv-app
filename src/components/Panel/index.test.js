import React from 'react';
import { render, screen } from '@testing-library/react';
import Panel from '.';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/theme';
import useMediaQuery from '../../hooks/useMediaQuery';

describe('Panel', () => {
  jest.mock(useMediaQuery, () => jest.fn());
  it('renders photo box', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Panel />
        </ThemeProvider>
      </BrowserRouter>
    );
    const avatar = screen.getByAltText('avatar');
    expect(avatar).toBeInTheDocument();
  });

  it('renders navigation', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Panel />
        </ThemeProvider>
      </BrowserRouter>
    );
    
    useMediaQuery.mockReturnValue(true);
    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();
  });

  it('renders menu button', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Panel />
        </ThemeProvider>
      </BrowserRouter>
    );
    const button = screen.getByRole('button', { name: 'menu' });
    expect(button).toBeInTheDocument();
  });
});
