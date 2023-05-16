import React from 'react';
import { render, screen } from '@testing-library/react';
import Skill from './Skill';

describe('Skill', () => {
  it('renders skill name and width style', () => {
    const skill = {
      name: 'React',
      range: 80,
    };

    render(<Skill skill={skill} />);

    const skillRangeElement = screen.getByTestId('skill-range');
    const skillNameElement = screen.getByText('React');

    expect(skillRangeElement).toBeInTheDocument();
    expect(skillNameElement).toBeInTheDocument();
    expect(skillRangeElement).toHaveStyle({ width: '80%' });
  });

  it('renders skill name as null when skill prop is not provided', () => {
    render(<Skill />);

    const skillNameElement = screen.queryByText('null');

    expect(skillNameElement).not.toBeInTheDocument();
  });
});
