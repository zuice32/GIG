import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Root, Container, Spinner,
} from 'native-base';

import { NavigationActions } from 'react-navigation';

export default class App extends Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });

    this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Main' }),
      ]
    }));
  }

  render() {
    return (
      <Container style={styles.spinningContainer}><Spinner color='blue' /></Container>
    );
  }
}

const styles = StyleSheet.create({
  spinningContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
