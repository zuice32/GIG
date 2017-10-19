import Zip from './Zip';

import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const rendered = shallow(<Zip />);

  expect(rendered).toBeTruthy();
});

it('tracks the zip input properly', () => {
  // const rendered = shallow(<Zip />);
  const rendered = new Zip();
  const input = {};
  rendered.trackInput(input);

  expect(rendered.input).toBe(input);
});

it('maintains zip input changes', () => {
  const rendered = shallow(<Zip />);
  const newZip = '12345';
  rendered.onChangeText(newZip);

  expect(rendered.state.zip).toBe('bah');
});

it('validates zip codes', () => {
  const zip = new Zip();
  expect(zip.validateZip(12345)).toBeTruthy();
});
it('validates incorrect zip codes', () => {
  const zip = new Zip();
  expect(zip.validateZip(123)).toBeFalsy();
});
