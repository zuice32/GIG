import React, { Component } from 'react';
import {
  Body, Text,
  Card, CardItem,
} from 'native-base';
import PropTypes from 'prop-types';

import Results from './Results';
import LinkToTesting from './LinkToTesting';


export default class Radon extends Component {
  render() {
    return (
      <Card>
        <CardItem header>
          <Body>
            <Text className="results-header">Results for {this.props.zip}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Results level={this.props.level} />
        </CardItem>
        <CardItem footer>
          <LinkToTesting url='http://www.monksp.org' />
        </CardItem>
      </Card>
    );
  }
}

Radon.propTypes = {
  zip: PropTypes.string,
  level: PropTypes.number,
};
