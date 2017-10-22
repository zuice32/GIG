import React, { Component } from 'react';
import { Image, View } from 'react-native';

export default class Header extends Component {

  render() {
    return (
      <View style={styles.header}>
        <Image source={require('../../../assets/dep-logo.png')} style={styles.image} />
      </View>
    )
  }

};

const styles = {
  header: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 95,
    width: 89,
  },
}
