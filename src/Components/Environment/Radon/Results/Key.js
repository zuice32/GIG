import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Content, View, List, ListItem, Left, Body, Button, Thumbnail, } from 'native-base';

import * as Ratings from '../../../../Styles/Ratings';

export default class Key extends Component {

  render() {
    // Insufficient, Feelin' Fine, Open a Window, Flee City, Repent Sins
    return (
      <View style={styles.key}>
        <View style={[styles.keyItem, styles.insufficient]}>
          <Text>No Data</Text>
        </View>
        <View style={[styles.keyItem, styles.good]}>
          <Text style={styles.goodText}>&lt; 10</Text>
        </View>
        <View style={[styles.keyItem, styles.warning]}>
          <Text>10.1 - 19.9</Text>
        </View>
        <View style={[styles.keyItem, styles.severe]}>
          <Text>&gt; 20</Text>
        </View>
      </View>
    );
  }

}

export const styles = StyleSheet.create({
  key: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 10,
  },
  keyItem: {
    height: 50,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  insufficient: {
    backgroundColor: Ratings.insufficientColor,
  },
  severe: {
    backgroundColor: Ratings.severeColor,
  },
  warning: {
    backgroundColor: Ratings.warningColor,
  },
  good: {
    backgroundColor: Ratings.goodColor,
  },
  goodText: { color: '#fff' }
});
