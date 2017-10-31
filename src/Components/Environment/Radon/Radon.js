import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  H1, Content,
} from 'native-base';
import PropTypes from 'prop-types';

import Results from './Results';
import Historical from './Historical';
import MoreInformation from './MoreInformation';

export class Radon extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  }
  render() {
    return (
      <Content>
        <Content padder>
          <H1>Average Test Results for {this.props.zip}</H1>
          <Results level={this.props.level} />
          <Historical historical={this.props.historical} />
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

const mapStateToProps = state => {
  return {
    zip: state.location.zip,
    level: state.radon.level,
    historical: state.radon.historicalAverages,
  }
};
// const mapStateToProps = state => ({
//   zip: state.location.zip,
//   level: state.radon.level,
//   historical: state.radon.historicalAverages,
// });

export default connect(mapStateToProps)(Radon);
