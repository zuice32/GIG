import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
  Container, Text, Content, Spinner, Drawer,
} from 'native-base';
import { TabNavigator } from 'react-navigation';


import Location from '../Components/Location/Location';
import Radon from '../Components/Environment/Radon/Radon';
import Water from '../Components/Environment/Water/Water';
import Footer from '../Components/Footer/Footer';

const Tabs = TabNavigator({
  EnvironmentRadon: { screen: Radon },
  EnvironmentWater: { screen: Water },
}, {
  swipeEnabled: true,
  animationEnabled: true,
});

export default class Main extends Component {
  static navigationOptions = {
    title: 'I am app',
  };

  render() {
    const { navigate } = this.props.navigation;
    // <Radon {...this.state.data.radon} />
    return (
      <Container style={styles.container}>
        <Tabs />
        <Location navigate={navigate} />
        <Footer openDrawer={this.props.screenProps.openDrawer} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
