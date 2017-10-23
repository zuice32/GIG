import React, { Component } from 'react';
import { Linking, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import {
  List, ListItem, Button, Text, Icon, Container, Content, Left, Body, Separator,
} from 'native-base';

import Header from './Header';
import Footer from './Footer';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.goToWater = this.goToWater.bind(this);
  }
  handleClick = url => {
    Linking.openURL(url);
  }

  goToWater = () => {
    const navigateAction = NavigationActions.navigate({ routeName: 'Water' });
    this.props.dispatch(navigateAction);
  }

  render() {
    console.log('nav', this.props.nav);
    // const { navigate } = this.props.navigation;
    return (
        <Container style={styles.container} padded>
          <Content style={styles.content}>
            <Header />
            <List>
              <Separator bordered>
                <Text>ENVIRONMENT</Text>
              </Separator>
              <ListItem>
                <Text>Overview</Text>
              </ListItem>
              <ListItem>
                <Text>Air</Text>
              </ListItem>
              <ListItem>
                <Text>Land</Text>
              </ListItem>
              <ListItem>
                <Button transparent onPress={this.goToWater}>
                  <Text>Water</Text>
                </Button>
              </ListItem>
              <ListItem>
                <Text>Waste</Text>
              </ListItem>
              <ListItem>
                <Text>Toxics</Text>
              </ListItem>
              <ListItem>
                <Text>Radiation</Text>
              </ListItem>
              <ListItem>
                <Text>Facilities</Text>
              </ListItem>
              <ListItem>
                <Text>Compliance</Text>
              </ListItem>
              <ListItem last>
                <Text>Other</Text>
              </ListItem>
              <Separator bordered>
                <Text>Health</Text>
              </Separator>
              <Separator bordered>
                <Text>Infrastructure/Transportation</Text>
              </Separator>
              <Separator bordered>
                <Text>Education</Text>
              </Separator>
              <Separator bordered>
                <Text>Agriculture</Text>
              </Separator>
              <Separator bordered>
                <Text>Labor and Industry</Text>
              </Separator>
              <Separator bordered>
                <Text>Revenue</Text>
              </Separator>
            </List>
            <Footer />
          </Content>
        </Container>
      );
  }
};

const styles = StyleSheet.create({
  container: { zIndex: 10000 },
  content: { flex: 1, backgroundColor: "#fff" }
});