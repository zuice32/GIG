import React from 'react';
import Radon from './Radon';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Radon />).toJSON();
  expect(rendered).toBeTruthy();
});
