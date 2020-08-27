import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { CategoryNavContainer } from './CategoryNavContainer';

describe('<CategoryNavContainer />', () => {
  it('matches snapshot', () => {
    const { container } = render(<CategoryNavContainer />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const { getByText } = render(<CategoryNavContainer />);
    getByText('');
  });
});

