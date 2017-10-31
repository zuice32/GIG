import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import {
  Content,
  Text,
} from 'native-base';

import Chart from './Chart';
import Location from './Location';
import MoreInformation from './MoreInformation';

class Water extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  }
  render() {
    return (
      <Content>
        <Content padder>
          <Location closest={this.props.location} />
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

const mapStateToProps = state => ({
  location: state.water.location,
});

export default connect(mapStateToProps)(Water);
