import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { Content, View, List, ListItem, Left, Body, Button, Thumbnail, } from 'native-base';
import PropTypes from 'prop-types';

import Circle from './Circle';
import Key from './Key'

export default class Results extends Component {

  render() {
    return (
      <Content>
        <View style={styles.list}>
          <Circle level={0} label={'Minimum'} />
          <Circle level={4.7} label={'Median'} />
          <Circle level={435.2} label={'Maximum'} />
        </View>
        <Key />
      </Content>
    );
  }

}

export const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});

Results.propTypes = {
  level: PropTypes.number,
};
