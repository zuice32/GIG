import React, { Component } from 'react';
import { Linking } from 'react-native';
import { Text } from 'native-base';
import PropTypes from 'prop-types';

export default class Link extends Component {
  handleClick = () => {
    console.log(`opening ${this.props.url}`)
    Linking.openURL(this.props.url);
  }

  render() {
    return (
      <Text onPress={this.handleClick}>{this.props.children}</Text>
    )
  }
}

Link.propTypes = {
  url: PropTypes.string,
};
