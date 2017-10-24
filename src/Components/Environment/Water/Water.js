import React, { Component } from 'react';
import {
  H1, Content,
} from 'native-base';

import Location from './Location';
import MoreInformation from './MoreInformation';

export default class Water extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  }
  render() {
    return (
      <Content>
        <Content padder>
          <Location closest={'Swatara Creek'} />
        </Content>
        <MoreInformation />
      </Content>
    )
  }
}
