import Loading from './Loading';

import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const rendered = shallow(<Loading />);

  expect(rendered).toBeTruthy();
});
