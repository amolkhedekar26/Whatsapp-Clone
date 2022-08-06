import React from 'react';
import { render } from '@testing-library/react';

import Sidebar from './Sidebar';

describe('Sidebar Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Sidebar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
