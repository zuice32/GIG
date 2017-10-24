import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import PropTypes from 'prop-types';

import Tabs from '../Navigators/EnvironmentNavigator';

import Header from '../Components/Header/Header'
import Location from '../Components/Location/Location';

export default class Main extends Component {
  static navigationOptions = {
    title: 'I am app',
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Header title={'I am app'} openDrawer={this.props.screenProps.openDrawer} />
        <Tabs navigation={this.props.navigation} />
        <Location navigate={navigate} />
      </Container>
    );
  }
}

Main.propTypes = {
  navigation: PropTypes.object,
  screenProps: PropTypes.object,
};

Main.router = Tabs.router;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
