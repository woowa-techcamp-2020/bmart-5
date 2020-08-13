import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { Banner } from './Banner';

describe('<Banner />', () => {
  it('matches snapshot', () => {
    const { container } = render(<Banner />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const { getByText } = render(<Banner />);
    getByText('');
  });
});

