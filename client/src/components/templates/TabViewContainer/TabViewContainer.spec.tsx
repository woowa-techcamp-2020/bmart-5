import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { TabViewContainer } from './TabViewContainer';

describe('<TabViewContainer />', () => {
  it('matches snapshot', () => {
    const { container } = render(<TabViewContainer />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const { getByText } = render(<TabViewContainer />);
    getByText('');
  });
});

