import React, { Component } from 'react';
import { Text } from 'native-base';

export default class Water extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  }
  render() {
    return <Text>Hello, Water world!</Text>
  }
}
