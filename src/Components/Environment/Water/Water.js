import React, { Component } from 'react';
import {
  Content,
} from 'native-base';

import Chart from './Chart';
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
          <Chart />
          <Chart />
        </Content>
        <MoreInformation />
      </Content>
    )
  }
}
