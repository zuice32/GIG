import React from 'react';
import Results, { styles } from './Results';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders good without crashing', () => {
  const rendered = shallow(<Results level={.8} />);
  const badge = rendered.find('.resultsBadge');
  expect(badge.props().style[1]).toBe(styles.resultNumberGood);
});

it('renders warning without crashing', () => {
  const rendered = shallow(<Results level={1.8} />);
  const badge = rendered.find('.resultsBadge');
  expect(badge.props().style[1]).toBe(styles.resultNumberWarning);
});

it('renders elevated without crashing', () => {
  const rendered = shallow(<Results level={2.8} />);
  const badge = rendered.find('.resultsBadge');
  expect(badge.props().style[1]).toBe(styles.resultNumberElevated);
});

it('renders severe without crashing', () => {
  const rendered = shallow(<Results level={3.8} />);
  const badge = rendered.find('.resultsBadge');
  expect(badge.props().style[1]).toBe(styles.resultNumberSevere);
});
