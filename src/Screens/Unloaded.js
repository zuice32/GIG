import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Container, Body, Content, Text } from 'native-base';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import Header from '../Components/Header/Header'

class Unloaded extends Component {
  static navigationOptions = {
    title: 'Getting started',
    header: null,
  };

  constructor(props) {
    super(props);

    this.dataLoaded = this.dataLoaded.bind(this);
  }

  dataLoaded() {
    if (this.props.locationProvided) {
      this.props.navigation.dispatch(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Main' }),
        ]
      }));
    }
  }

  componentWillMount() {
    this.dataLoaded();
  }

  componentDidUpdate() {
    this.dataLoaded();
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Container style={styles.container}>
        <Header title={'Welcome'} showDrawer={false} navigate={navigate} autoShowLocation={true} />
        <Body style={styles.mainContent}>
          <Text style={styles.text}>
            To begin, please enter your location using the button in the upper left.
          </Text>
        </Body>
      </Container>
    );
  }
}

Unloaded.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  mainContent: {
    alignItems: 'center',
  },
  text: {
    marginTop: 100,
    textAlign: 'center',
  }
});

const mapStateToProps = state => ({
  locationProvided: state.location.provided,
});

export default connect(mapStateToProps)(Unloaded);
