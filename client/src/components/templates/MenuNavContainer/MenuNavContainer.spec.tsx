import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { MenuNavContainer } from './MenuNavContainer';

describe('<MenuNavContainer />', () => {
  it('matches snapshot', () => {
    const { container } = render(<MenuNavContainer />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const { getByText } = render(<MenuNavContainer />);
    getByText('');
  });
});

