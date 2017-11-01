import React, { Component } from 'react';
import { Header, Body, Title, Left, Right, Button, Icon } from 'native-base';
import PropTypes from 'prop-types';

import Location from '../Location/Location';

export default class AppHeader extends Component {
  render() {
    let right;
    if (this.props.showDrawer) {
      right = (
        <Right>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="menu" />
          </Button>
        </Right>
      );
    }
    else {
      right = <Right />
    }
    return (
      <Header>
        <Left><Location navigate={this.props.navigate} /></Left>
        <Body><Title>{this.props.title}</Title></Body>
        {right}
      </Header>
    )
  }
}

AppHeader.defaultProps = {
  showDrawer: true,
};

AppHeader.propTypes = {
  title: PropTypes.string,
  openDrawer: PropTypes.func,
  showDrawer: PropTypes.bool,
};
