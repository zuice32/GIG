import React from 'react';
import { Radon } from './Radon';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const rendered = shallow(<Radon />);
  expect(rendered).toBeTruthy();
});
