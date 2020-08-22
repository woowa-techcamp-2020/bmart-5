import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { ToastModal } from './ToastModal';

describe('<ToastModal />', () => {
  it('matches snapshot', () => {
    const { container } = render(<ToastModal />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const { getByText } = render(<ToastModal />);
    getByText('');
  });
});

