import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/theme';
import Feedback from '.';
import { feedbackData } from '../../constants/feedbacksData';

describe('Feedback component', () => {
  it('renders Feedback with data in props', () => {
    render(
      <ThemeProvider theme={theme}>
        <Feedback data={feedbackData} />
      </ThemeProvider>
    );
    const feedBackText = feedbackData.map((item, index) =>
      screen.getByText(item.feedback)
    );
    const nameText = feedbackData.map((item, index) =>
      screen.getByText(item.reporter.name)
    );

    feedBackText.forEach((el) => expect(el).toBeInTheDocument());
    feedBackText.forEach((el) => expect(el).toMatchSnapshot());
    nameText.forEach((el) => expect(el).toBeInTheDocument());
  });
});
