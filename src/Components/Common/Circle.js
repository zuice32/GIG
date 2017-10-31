import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { Content, View, List, ListItem, Left, Body, Button, Thumbnail, } from 'native-base';
import PropTypes from 'prop-types';

import * as Ratings from '../../Styles/Ratings';

export default class Circle extends Component {

  render() {
    let resultStyle = styles.good;
    if (this.props.level === undefined) {
      resultStyle = styles.insufficient;
    }
    if (this.props.level > this.props.severeLevel) {
      resultStyle = styles.severe;
    }
    else if (this.props.level > this.props.warningLevel) {
      resultStyle = styles.warning;
    }

    return (
      <View style={styles.circleContainer}>
        <Text style={[styles.result, resultStyle]}>{this.props.level.toFixed(2)}</Text>
        <Text style={styles.label}>{this.props.label}</Text>
      </View>
    );
  }

}

Circle.defaultProps = {
  level: undefined,
  label: '',
};

export const styles = StyleSheet.create({
  circleContainer: {
    alignItems: 'center',
    flexGrow: 1,
    flexBasis: 0,
  },
  result: {
    backgroundColor: Ratings.insufficientColor,
    height: 100,
    width: 100,
    borderRadius: 50,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  insufficient: {},
  severe: {
    backgroundColor: Ratings.severeColor,
  },
  warning: {
    backgroundColor: Ratings.warningColor,
    color: '#000',
  },
  good: {
    backgroundColor: Ratings.goodColor,
  },
});

Circle.propTypes = {
  level: PropTypes.number,
  severeLevel: PropTypes.number,
  warningLevel: PropTypes.number,
};
