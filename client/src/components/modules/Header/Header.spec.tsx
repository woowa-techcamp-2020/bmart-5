import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { Header } from './Header';

describe('<Header />', () => {
  it('matches snapshot', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const { getByRole, getByAltText } = render(<Header />);
    getByRole('ArrowLeft');
    getByAltText('logo');
    getByRole('Search');
    getByRole('Bars');
  });
});
