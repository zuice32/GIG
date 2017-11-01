import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { Content, View, List, ListItem, Left, Body, Button, Thumbnail, } from 'native-base';
import PropTypes from 'prop-types';

import * as Ratings from '../../Styles/Ratings';

export default class Circle extends Component {

  render() {
    let resultStyle = styles.good;
    let text = this.props.level.toFixed(2);

    if (this.props.level === -1) {
      resultStyle = styles.insufficient;
      text = 'No data';
    }
    else if (this.props.level > this.props.severeLevel) {
      resultStyle = styles.severe;
    }
    else if (this.props.level > this.props.warningLevel) {
      resultStyle = styles.warning;
    }

    return (
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <View style={[styles.result, resultStyle]}>
            <Text style={styles.text}>{text}</Text>
          </View>
          <Text style={styles.label}>{this.props.label}</Text>
        </View>
      </View>
    );
  }

}

Circle.defaultProps = {
  level: -1,
  label: '',
};

Circle.propTypes = {
  level: PropTypes.number,
  severeLevel: PropTypes.number,
  warningLevel: PropTypes.number,
};

export const styles = StyleSheet.create({
  circleContainer: {
    flexGrow: 1,
    flexBasis: 0,
  },
  circle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  result: {
    backgroundColor: Ratings.insufficientColor,
    height: 90,
    maxHeight: 90,
    width: 90,
    borderRadius: 45,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  insufficient: {},
  severe: {
    backgroundColor: Ratings.severeColor,
  },
  warning: {
    backgroundColor: Ratings.warningColor,
  },
  good: {
    backgroundColor: Ratings.goodColor,
  },
  text: {
    color: '#fff',
  },
  label: {
    fontSize: 12,
    maxWidth: 100,
    textAlign: 'center',
  },
});
