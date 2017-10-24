import React, { Component } from 'react';
import { Linking, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  List, ListItem, Text, Container, Content, Separator,
} from 'native-base';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.goTo = this.goTo.bind(this);
  }
  handleClick = url => {
    Linking.openURL(url);
  }

  goTo = destination => {
    const navigateAction = NavigationActions.navigate({ routeName: destination });
    this.props.dispatch(navigateAction);
  }

  render() {
    return (
        <Container style={styles.container} padded>
          <Content style={styles.content}>
            <Header />
            <List>
              <Separator bordered>
                <Text>ENVIRONMENT</Text>
              </Separator>
              <ListItem onPress={() => this.goTo('Radon')}>
                  <Text>Radon</Text>
              </ListItem>
              <ListItem onPress={() => this.goTo('Water')}>
                  <Text>Water</Text>
              </ListItem>
              <ListItem>
                <Text style={styles.textDisabled}>Overview</Text>
              </ListItem>
              <ListItem>
                <Text style={styles.textDisabled}>Air</Text>
              </ListItem>
              <ListItem>
                <Text style={styles.textDisabled}>Land</Text>
              </ListItem>
              <ListItem>
                <Text style={styles.textDisabled}>Waste</Text>
              </ListItem>
              <ListItem>
                <Text style={styles.textDisabled}>Toxics</Text>
              </ListItem>
              <ListItem>
                <Text style={styles.textDisabled}>Radiation</Text>
              </ListItem>
              <ListItem>
                <Text style={styles.textDisabled}>Facilities</Text>
              </ListItem>
              <ListItem>
                <Text style={styles.textDisabled}>Compliance</Text>
              </ListItem>
              <ListItem last>
                <Text style={styles.textDisabled}>Other</Text>
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
}

Sidebar.propTypes = {
  dispatch: PropTypes.func,
};

const styles = StyleSheet.create({
  container: { zIndex: 10000 },
  content: { flex: 1, backgroundColor: "#fff" },
  textDisabled: { opacity: .2 },
});
