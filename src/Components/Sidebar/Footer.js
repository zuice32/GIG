import React, { Component } from 'react';
import { Linking } from 'react-native';
import {
  Footer, FooterTab, Button, Text, Icon
} from 'native-base';

export default class AppFooter extends Component {
  handleClick = url => {
    Linking.openURL(url);
  }

  render() {
      return (
        <Footer>
          <FooterTab>
            <Button className="socialButton" onPress={() => this.handleClick('https://www.facebook.com/PennsylvaniaDEP/')}>
              <Icon name="logo-facebook" />
            </Button>
            <Button className="socialButton" onPress={() => this.handleClick('https://twitter.com/pennsylvaniadep')}>
              <Icon name="logo-twitter" />
            </Button>
            <Button className="socialButton" onPress={() => this.handleClick('https://www.instagram.com/pennsylvaniadep/')}>
              <Icon name="logo-instagram" />
            </Button>
            <Button className="socialButton" onPress={() => this.handleClick('https://www.youtube.com/user/PennsylvaniaDEP')}>
              <Icon name="logo-youtube" />
            </Button>
          </FooterTab>
        </Footer>
      );
  }
}
