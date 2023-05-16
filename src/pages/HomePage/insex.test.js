import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/theme';

describe('HomePage', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <HomePage />
        </ThemeProvider>
      </MemoryRouter>
    );
  });

  it('renders the avatar image', () => {
    const avatarImgElement = screen.getByAltText('avatar');
    expect(avatarImgElement).toBeInTheDocument();
    expect(avatarImgElement.src).toContain('avatar.jpg');
  });

  it('renders the name', () => {
    const nameElement = screen.getByText('Nurzhan Bizhan');
    expect(nameElement).toBeInTheDocument();
  });

  it('renders the subtext', () => {
    const subTextElement = screen.getByText('Programmer. Creative. Innovator');
    expect(subTextElement).toBeInTheDocument();
  });

  it('renders the additional text', () => {
    const additionalTextElement = screen.getByText(
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque'
    );
    expect(additionalTextElement).toBeInTheDocument();
  });

  it('renders the "Know more" button', () => {
    const knowMoreButtonElement = screen.getByText('Know more');
    expect(knowMoreButtonElement).toBeInTheDocument();
  });

  it('renders the link to the inner page', () => {
    const linkElement = screen.getByRole('link', { name: 'Know more' });
    expect(linkElement).toHaveAttribute('href', '/inner');
  });
});
