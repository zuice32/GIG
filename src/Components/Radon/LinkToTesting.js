import React, { Component } from 'react';
import { Button, Linking } from 'react-native';
import PropTypes from 'prop-types';

export default class LinkToTesting extends Component {
  handleClick = () => {
    Linking.openURL(this.props.url);
  }

  render() {
    return (
      <Button className="radonTestLink" block info onPress={this.handleClick} title="Learn how to perform your own radon test">
      </Button>
    )
  }
}

LinkToTesting.propTypes = {
  url: PropTypes.string,
};
