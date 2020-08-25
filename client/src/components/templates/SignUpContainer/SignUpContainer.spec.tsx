import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { SignUpContainer } from './SignUpContainer';

describe('<SignUpContainer />', () => {
  it('matches snapshot', () => {
    const { container } = render(<SignUpContainer />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const { getByText } = render(<SignUpContainer />);
    getByText('');
  });
});

