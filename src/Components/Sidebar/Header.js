import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Text } from 'native-base';

export default class Header extends Component {

  render() {
    return (
        <Image source={require('../../../assets/banner-agency.jpg')} resizeMode='cover' style={styles.banner}>
          <Image source={require('../../../assets/dep-logo.png')} style={styles.image} />
          <Text style={styles.text}>Department of Environmental Protection</Text>
        </Image>
    )
  }
}

const styles = StyleSheet.create({
  banner: {
    height: 200,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 90,
    width: 90,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  }
});
