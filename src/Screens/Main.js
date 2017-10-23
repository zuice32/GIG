import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
  Container, Text, Content, Spinner, Drawer,
} from 'native-base';

import Tabs from '../Navigators/EnvironmentNavigator';

import Location from '../Components/Location/Location';
import Footer from '../Components/Footer/Footer';

export default class Main extends Component {
  static navigationOptions = {
    title: 'I am app',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Tabs navigation={this.props.navigation} />
        <Location navigate={navigate} />
        <Footer openDrawer={this.props.screenProps.openDrawer} />
      </Container>
    );
  }
}

Main.router = Tabs.router;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
