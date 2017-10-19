import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { View, List, ListItem, Left, Body, Button } from 'native-base';
import PropTypes from 'prop-types';

export default class Results extends Component {

  render() {
    let resultStyle = styles.resultNumberGood;
    if (this.props.level > 3) {
      resultStyle = styles.resultNumberSevere;
    }
    else if (this.props.level > 2) {
      resultStyle = styles.resultNumberElevated;
    }
    else if (this.props.level > 1) {
      resultStyle = styles.resultNumberWarning;
    }

    return (
      <View style={{flex: 1}}>
        <Grid>
          <Col style={styles.resultNumberContainer}>
          <View className="resultsBadge" style={[ styles.resultNumber, resultStyle]}>
            <Text style={styles.resultNumberText}>{this.props.level}</Text>
          </View>
          </Col>
          <Col>
            <List>
              <ListItem icon>
                <Left><Button style={styles.resultNumberSevere}></Button></Left>
                <Body><Text style={styles.keyText}>Repent Sins</Text></Body>
              </ListItem>
              <ListItem icon>
                <Left><Button style={styles.resultNumberElevated}></Button></Left>
                <Body><Text style={styles.keyText}>Flee City</Text></Body>
              </ListItem>
              <ListItem icon>
                <Left><Button style={styles.resultNumberWarning}></Button></Left>
                <Body><Text style={styles.keyText}>Open Windows or Something</Text></Body>
              </ListItem>
              <ListItem icon>
                <Left><Button style={styles.resultNumberGood}></Button></Left>
                <Body><Text style={styles.keyText}>Feeling Fine</Text></Body>
              </ListItem>
            </List>
          </Col>
        </Grid>
      </View>
    );
  }

}

export const styles = StyleSheet.create({
  resultNumberContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultNumber: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  resultNumberSevere: {
    backgroundColor: '#f00',
  },
  resultNumberElevated: {
    backgroundColor: 'orange',
  },
  resultNumberWarning: {
    backgroundColor: 'yellow',
  },
  resultNumberGood: {
    backgroundColor: '#00f',
  },
  resultNumberText: {
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
  },
  keyText: {
    fontSize: 10,
  },
  icon: {
    backgroundColor: '#0f0'
  }
});

Results.propTypes = {
  level: PropTypes.number,
};
