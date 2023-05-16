import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/theme';
import Box from '.';

describe('Box component', () => {
  it('renders Box title and children', () => {
    render(
      <ThemeProvider theme={theme}>
        <Box title="hello" id="1">
          <p>box</p>
        </Box>
      </ThemeProvider>
    );
    const title = screen.getByText(/hello/i);
    const children = screen.getByText(/box/i);
    expect(title).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });
});
