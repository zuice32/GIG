import React, { Component } from 'react';
import {
  Content,
  H2,
  Text,
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
          <H2>Uses - Recreation</H2>
          <Chart />
          <H2>Impacts</H2>
          <Chart />
          <Text>
            Information is collected through a collaborative sampling effort of
            PADEP&apos;s Water Quality Network.  This information, a generic
            cutoff, is not necessarily related to regulations and is provided
            for educational purposes.
          </Text>
        </Content>
        <MoreInformation />
      </Content>
    )
  }
}
