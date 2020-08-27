import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { HistoryCard } from './HistoryCard';

describe('<HistoryCard />', () => {
  it('matches snapshot', () => {
    const { container } = render(<HistoryCard />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const { getByText } = render(<HistoryCard />);
    getByText('');
  });
});

