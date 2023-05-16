import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/theme';
import Button from '.';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

describe('button component', () => {
  it('renders button with text prop', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button text="back" icon={faChevronUp} />
      </ThemeProvider>
    );
    const text = screen.getByText(/back/i);
    const icon = screen.getByTestId(/icon/i);
    expect(text).toBeInTheDocument();
    expect(text).toMatchSnapshot();
    expect(icon).toBeInTheDocument();
  });
});
