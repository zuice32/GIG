import React, { Component } from 'react';
import { Linking } from 'react-native';
import { Text } from 'native-base';
import PropTypes from 'prop-types';

export default class LinkToTesting extends Component {
  handleClick = () => {
    Linking.openURL(this.props.url);
  }

  render() {
    return (
      <Text className="radonTestLink" onPress={this.handleClick}>Learn how to perform your own radon test</Text>
    )
  }
}

LinkToTesting.propTypes = {
  url: PropTypes.string,
};
