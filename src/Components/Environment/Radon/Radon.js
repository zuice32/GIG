import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  H1, Content,
} from 'native-base';
import PropTypes from 'prop-types';
import { AppLoading } from 'expo';

import Results from './Results';
import Historical from './Historical';
import MoreInformation from './MoreInformation';

export class Radon extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  }
  render() {
    if (!this.props.loaded) {
      return <AppLoading />;
    }
    const historical = this.props.historical ? <Historical historical={this.props.historical} /> : null;
    return (
      <Content>
        <Content padder>
          <H1 style={styles.title}>Average Radon Test Results for {this.props.zip}</H1>
          <Results level={this.props.level} />
          {historical}
        </Content>
        <MoreInformation />
      </Content>
    );
  }
}

Radon.propTypes = {
  loaded: PropTypes.bool,
  zip: PropTypes.string,
  level: PropTypes.number,
};

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    textAlign: 'center',
  },
})

const mapStateToProps = state => ({
  loaded: state.radon.loaded,
  zip: state.location.zip,
  level: state.radon.level,
  historical: state.radon.historicalAverages,
});

export default connect(mapStateToProps)(Radon);
