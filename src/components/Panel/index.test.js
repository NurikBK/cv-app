import React from 'react';
import { render, screen } from '@testing-library/react';
import Panel from '.';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/theme';
import useMediaQuery from '../../hooks/useMediaQuery';

jest.mock('../../hooks/useMediaQuery');
describe('Panel', () => {
  it('renders photo box', () => {
    useMediaQuery.mockReturnValue(true);

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

  it('renders desktop navigation', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Panel />
        </ThemeProvider>
      </BrowserRouter>
    );

    useMediaQuery.mockReturnValue(true);
    const navigation = screen.getByTestId('desktop');
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
    useMediaQuery.mockReturnValue(true);
    const button = screen.getByTestId('menu');
    expect(button).toBeInTheDocument();
  });
});
