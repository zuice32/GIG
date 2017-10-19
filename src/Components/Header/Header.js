import React, { Component } from 'react';
import {
  Header, Body, Left, Right, Title,
} from 'native-base';

export default class AppHeader extends Component {

  render() {
      return (
          <Header>
            <Left />
            <Body><Title>I am app</Title></Body>
            <Right />
          </Header>
      );
  }
}
