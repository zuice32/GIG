import React from 'react';
import { Linking } from 'react-native';
import LinkToTesting from './LinkToTesting';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const clickTester = jest.fn();
  Linking.openURL = clickTester;

  const rendered = shallow(<LinkToTesting />);
  rendered.simulate('press');

  expect(clickTester.mock.calls.length).toBe(1);
});
