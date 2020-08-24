import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { Input } from './Input';

describe('<Input />', () => {
  it('matches snapshot', () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const { getByText } = render(<Input />);
    getByText('');
  });
});

