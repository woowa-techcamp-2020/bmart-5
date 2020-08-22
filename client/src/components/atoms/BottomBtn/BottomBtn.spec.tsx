import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { BottomBtn } from './BottomBtn';

describe('<BottomBtn />', () => {
  it('matches snapshot', () => {
    const { container } = render(<BottomBtn />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const { getByText } = render(<BottomBtn />);
    getByText('');
  });
});

