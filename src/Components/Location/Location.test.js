import React from 'react';
import { Location } from './Location';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Location />).toJSON();
  expect(rendered).toBeTruthy();
});
