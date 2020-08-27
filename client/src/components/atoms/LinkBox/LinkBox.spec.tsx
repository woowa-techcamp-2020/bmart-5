import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { LinkBox } from './LinkBox';

describe('<LinkBox />', () => {
  it('matches snapshot', () => {
    const { container } = render(<LinkBox />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const { getByText } = render(<LinkBox />);
    getByText('');
  });
});

