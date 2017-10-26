import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Content, View, List, ListItem, Left, Body, Button, Thumbnail, } from 'native-base';

export default class Key extends Component {

  render() {
    // Insufficient, Feelin' Fine, Open a Window, Flee City, Repent Sins
    return (
      <View style={styles.key}>
        <View style={[styles.keyItem, styles.insufficient]}>
          <Text>No Data</Text>
        </View>
        <View style={[styles.keyItem, styles.good]}>
          <Text style={styles.goodText}>&lt; 4</Text>
        </View>
        <View style={[styles.keyItem, styles.warning]}>
          <Text>4.1 - 9.9</Text>
        </View>
        <View style={[styles.keyItem, styles.elevated]}>
          <Text>10 - 19.9</Text>
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
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  insufficient: {
    backgroundColor: '#ccc',
  },
  severe: {
    backgroundColor: '#f00',
  },
  elevated: {
    backgroundColor: 'orange',
  },
  warning: {
    backgroundColor: 'yellow',
  },
  good: {
    backgroundColor: '#00f',
  },
  goodText: { color: '#fff' }
});
