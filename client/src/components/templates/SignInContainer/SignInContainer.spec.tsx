import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { SignInContainer } from './SignInContainer';

describe('<SignInContainer />', () => {
  it('matches snapshot', () => {
    const { container } = render(<SignInContainer />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const { getByText } = render(<SignInContainer />);
    getByText('');
  });
});

