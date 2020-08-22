import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { CounterBtn } from './CounterBtn';

describe('<CounterBtn />', () => {
  it('matches snapshot', () => {
    const { container } = render(<CounterBtn />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const { getByText } = render(<CounterBtn />);
    getByText('');
  });
});

