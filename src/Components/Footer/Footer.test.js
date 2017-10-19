import React from 'react';
import { Linking } from 'react-native';
import Footer from './Footer';

import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders all the social icons', () => {
  const rendered = renderer.create(<Footer />).toJSON();
  expect(rendered.children[0].children.length).toBe(4);
});

it('makes social buttons clickable', () => {
  const clickTester = jest.fn();
  Linking.openURL = clickTester;

  const rendered = shallow(<Footer />);
  const buttons = rendered.find('.socialButton');
  buttons.forEach(button => {
    button.simulate('press');
  });

  expect(clickTester.mock.calls.length).toBe(4);

});
