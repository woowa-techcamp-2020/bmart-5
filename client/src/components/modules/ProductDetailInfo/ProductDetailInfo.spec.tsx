import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { ProductDetailInfo } from './ProductDetailInfo';

describe('<ProductDetailInfo />', () => {
  it('matches snapshot', () => {
    const { container } = render(<ProductDetailInfo />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const { getByText } = render(<ProductDetailInfo />);
    getByText('');
  });
});

