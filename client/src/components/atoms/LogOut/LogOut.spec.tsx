import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { LogOut } from './LogOut';

describe('<LogOut />', () => {
  it('matches snapshot', () => {
    const { container } = render(<LogOut />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const { getByText } = render(<LogOut />);
    getByText('');
  });
});

