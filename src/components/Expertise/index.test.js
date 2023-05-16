import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/theme';
import Expertise from '.';
import { expertiseData } from '../../constants/expertiseData';

describe('Expertise component', () => {
  it('renders Expertise with data in props', () => {
    render(
      <ThemeProvider theme={theme}>
        <Expertise data={expertiseData} />
      </ThemeProvider>
    );
    const datesText = expertiseData.map((item, index) =>
      screen.getByText(item.date)
    );
    const companyText = expertiseData.map((item, index) =>
      screen.getByText(item.info.company)
    );
    const jobText = expertiseData.map((item, index) =>
      screen.getByText(item.info.job)
    );

    datesText.forEach((el) => expect(el).toMatchSnapshot());
    companyText.forEach((el) => expect(el).toBeInTheDocument());
    jobText.forEach((el) => expect(el).toBeInTheDocument());
  });
});
