import React from 'react';
import { render, screen } from '@testing-library/react';
import PhotoBox from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/theme';

describe('PhotoBox', () => {
  test('renders image with alt text', () => {
    render(
      <ThemeProvider theme={theme}>
        <PhotoBox avatar="avatar.jpg" />
      </ThemeProvider>
    );
    const image = screen.getByAltText('avatar');
    expect(image).toBeInTheDocument();
  });

  test('renders name, sub, and text when provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <PhotoBox
          avatar="avatar.jpg"
          name="John Doe"
          sub="Software Developer"
          text="Lorem ipsum dolor sit amet"
        />
      </ThemeProvider>
    );
    const name = screen.getByText('John Doe');
    const sub = screen.getByText('Software Developer');
    const text = screen.getByText('Lorem ipsum dolor sit amet');
    expect(name).toBeInTheDocument();
    expect(sub).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  test('does not render name, sub, or text when not provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <PhotoBox avatar="avatar.jpg" />
      </ThemeProvider>
    );
    const name = screen.queryByText('John Doe');
    const sub = screen.queryByText('Software Developer');
    const text = screen.queryByText('Lorem ipsum dolor sit amet');
    expect(name).toBeNull();
    expect(sub).toBeNull();
    expect(text).toBeNull();
  });
});
