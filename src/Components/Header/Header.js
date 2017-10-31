import React, { Component } from 'react';
import { Header, Body, Title, Left, Right, Button, Icon } from 'native-base';
import PropTypes from 'prop-types';

import Location from '../Location/Location';

export default class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Left><Location /></Left>
        <Body><Title>{this.props.title}</Title></Body>
        <Right>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
    )
  }
}

AppHeader.propTypes = {
  title: PropTypes.string,
  openDrawer: PropTypes.func,
};
