import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { GoogleLoginBtn } from './GoogleLoginBtn';

describe('<GoogleLoginBtn />', () => {
  it('matches snapshot', () => {
    const { container } = render(<GoogleLoginBtn />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const { getByText } = render(<GoogleLoginBtn />);
    getByText('');
  });
});

