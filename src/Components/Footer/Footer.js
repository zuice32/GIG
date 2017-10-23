import React, { Component } from 'react';
import { Linking, StyleSheet } from 'react-native';
import {
  Footer, FooterTab, Button, Text, Icon, Right,
} from 'native-base';

export default class AppFooter extends Component {
  handleClick = url => {
    Linking.openURL(url);
  }

  render() {
      return (
        <Footer>
          <Right>
              <Button transparent onPress={this.props.openDrawer}>
                <Icon name="menu" />
              </Button>
          </Right>
        </Footer>
      );
  }
}
