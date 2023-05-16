import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/theme';
import Info from '.';

describe('Info component', () => {
  it('renders info with text prop', () => {
    render(
      <ThemeProvider theme={theme}>
        <Info text="back" />
      </ThemeProvider>
    );
    const text = screen.getByText(/back/i);
    expect(text).toBeInTheDocument();
  });
});
