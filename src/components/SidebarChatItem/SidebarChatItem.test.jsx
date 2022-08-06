import React from 'react';
import { render } from '@testing-library/react';

import SidebarChatItem from './SidebarChatItem';

describe('SidebarChatItem Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<SidebarChatItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
