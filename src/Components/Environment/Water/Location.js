import React, { Component } from 'react';
import { H1 } from 'native-base';
import PropTypes from 'prop-types';

export default class Location extends Component {
  render() {
    return (
      <H1>
        The closest continuously monitoring data station is {this.props.closest}
      </H1>
    )
  }
}
Location.propTypes = {
  closest: PropTypes.string,
};
