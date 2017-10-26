import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  H1, Content,
} from 'native-base';
import PropTypes from 'prop-types';

import Results from './Results';
import Historical from './Historical';
import MoreInformation from './MoreInformation';

class Radon extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  }
  render() {
    return (
      <Content>
        <Content padder>
          <H1>Average Test Results for {this.props.zip}</H1>
          <Results level={this.props.level} />
          <Historical />
        </Content>
        <MoreInformation />
      </Content>
    );
  }
}

Radon.propTypes = {
  zip: PropTypes.string,
  level: PropTypes.number,
};

const mapStateToProps = state => ({
  zip: state.location.zip,
  level: state.radon.level,
});

export default connect(mapStateToProps)(Radon);
