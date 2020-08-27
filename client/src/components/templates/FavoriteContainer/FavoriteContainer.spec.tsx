import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { FavoriteContainer } from './FavoriteContainer';

describe('<FavoriteContainer />', () => {
  it('matches snapshot', () => {
    const { container } = render(<FavoriteContainer />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const { getByText } = render(<FavoriteContainer />);
    getByText('');
  });
});

