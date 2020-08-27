import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { HistoryContainer } from './HistoryContainer';

describe('<HistoryContainer />', () => {
  it('matches snapshot', () => {
    const { container } = render(<HistoryContainer />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const { getByText } = render(<HistoryContainer />);
    getByText('');
  });
});

