import React from 'react';
import { render } from '@testing-library/react';

import Chat from './Chat';

describe('Chat Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Chat />);
    expect(asFragment()).toMatchSnapshot();
  });
});
