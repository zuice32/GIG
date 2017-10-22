import React, { Component } from 'react';
import { Linking } from 'react-native';
import {
  Footer, FooterTab, Button, Text, Icon,
} from 'native-base';

export default class AppFooter extends Component {
  handleClick = url => {
    Linking.openURL(url);
  }

  render() {
      return (
        <Footer>
          <FooterTab>
              <Button className="socialButton" onPress={this.props.openDrawer}>
                <Icon name="menu" />
              </Button>
          </FooterTab>
        </Footer>
      );
  }
}
