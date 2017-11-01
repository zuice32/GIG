import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
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
        <Header title={'Getting Started'} showDrawer={false} navigate={navigate} />
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
});

const mapStateToProps = state => ({
  locationProvided: state.location.provided,
});

export default connect(mapStateToProps)(Unloaded);
