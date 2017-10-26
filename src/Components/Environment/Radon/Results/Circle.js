import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { Content, View, List, ListItem, Left, Body, Button, Thumbnail, } from 'native-base';
import PropTypes from 'prop-types';

export default class Circle extends Component {

  render() {
    let resultStyle = styles.good;
    if (this.props.level > 20) {
      resultStyle = styles.severe;
    }
    else if (this.props.level >= 10) {
      resultStyle = styles.elevated;
    }
    else if (this.props.level > 4) {
      resultStyle = styles.warning;
    }

    return (
      <View style={styles.circleContainer}>
        <Text style={[styles.result, resultStyle]}>{this.props.level}</Text>
        <Text style={styles.label}>{this.props.label}</Text>
      </View>
    );
  }

}

export const styles = StyleSheet.create({
  circleContainer: {
    alignItems: 'center',
  },
  result: {
    backgroundColor: '#ddd',
    height: 100,
    width: 100,
    borderRadius: 50,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  severe: {
    backgroundColor: '#f00',
  },
  elevated: {
    backgroundColor: 'orange',
  },
  warning: {
    backgroundColor: 'yellow',
    color: '#000',
  },
  good: {
    backgroundColor: '#00f',
  },
  label: {
  }
});

Circle.propTypes = {
  level: PropTypes.number,
};
