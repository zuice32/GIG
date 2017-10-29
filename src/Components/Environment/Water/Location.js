import React, { Component } from 'react';
import { Text } from 'native-base';
import PropTypes from 'prop-types';

export default class Location extends Component {
  render() {
    return (
      <Text>
        Data for monitoring station: {this.props.closest}
      </Text>
    )
  }
}
Location.propTypes = {
  closest: PropTypes.string,
};
