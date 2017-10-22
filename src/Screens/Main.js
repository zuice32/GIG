import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
  Container, Text, Content, Spinner,
} from 'native-base';

import Location from '../Components/Location/Location';
import Radon from '../Components/Radon/Radon';
import Footer from '../Components/Footer/Footer';

const initialState = {
  radon: {
    zip: '18847',
    level: .8,
  },
}

export default class Main extends Component {
  static navigationOptions = {
    title: 'I am app',
  };

  constructor(props) {
    super(props);
    this.locationUpdate = this.locationUpdate.bind(this);
    this.state = {
      isReady: false,
      data: initialState,
      location: undefined,
    }

  }

  locationUpdate(coords, zip) {
    this.setState({ location:  { zip, coords } });
    console.log(this.state);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container padder>
        <Content>
            <Radon {...this.state.data.radon} />
        </Content>
        <Location locationUpdate={this.locationUpdate} navigate={navigate} />
        <Footer />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  spinningContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
