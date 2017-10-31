import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { Content, View, List, ListItem, Left, Body, Button, Thumbnail, } from 'native-base';
import PropTypes from 'prop-types';

import Circle from '../../../Common/Circle';
import Key from './Key'

class Results extends Component {

  render() {
    return (
      <Content>
        <View style={styles.list}>
          <Circle level={this.props.minimum} label={'Minimum'} severeLevel={20} warningLevel={10} />
          <Circle level={this.props.average} label={'Average'} severeLevel={20} warningLevel={10} />
          <Circle level={this.props.maximum} label={'Maximum'} severeLevel={20} warningLevel={10} />
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

const mapStateToProps = state => ({
  average: state.radon.average,
  minimum: state.radon.minimum,
  maximum: state.radon.maximum,
});

export default connect(mapStateToProps)(Results);
