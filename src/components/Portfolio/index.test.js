import { render, fireEvent, screen } from '@testing-library/react';
import Portfolio from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/theme';

// Mock the Isotope library
jest.mock('isotope-layout');

const ThemedPortfolio = () => {
  return (
    <ThemeProvider theme={theme}>
      <Portfolio />
    </ThemeProvider>
  );
};

describe('Portfolio component', () => {
  it('should render correctly', () => {
    render(<ThemedPortfolio />);
    const allBtn = screen.getByText('All');
    const uiBtn = screen.getByText('UI');
    const codeBtn = screen.getByText('Code');
    expect(allBtn).toBeInTheDocument();
    expect(uiBtn).toBeInTheDocument();
    expect(codeBtn).toBeInTheDocument();
  });

  it('should filter by UI', () => {
    render(<ThemedPortfolio />);
    const uiBtn = screen.getByText('UI');
    fireEvent.click(uiBtn);
    expect(screen.getByAltText('card1')).toHaveAttribute('src', 'project1.png');
    expect(screen.getByText('Space Travel')).toBeInTheDocument();
    expect(screen.getByAltText('card3')).toHaveAttribute('src', 'project3.png');
    expect(screen.getByText('EVOGYM')).toBeInTheDocument();
  });

  it('should filter by code', () => {
    render(<ThemedPortfolio />);
    const codeBtn = screen.getByText('Code');
    fireEvent.click(codeBtn);
    expect(screen.getByAltText('card2')).toHaveAttribute('src', 'project2.png');
    expect(screen.getByText('Some text')).toBeInTheDocument();
    expect(screen.getByAltText('card4')).toHaveAttribute('src', 'project4.png');
    expect(screen.getByText('Split Landing Page')).toBeInTheDocument();
  });
});
