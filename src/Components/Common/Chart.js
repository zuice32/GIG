import React, { Component } from 'react';

import ChartView from 'react-native-highcharts';

export default class Chart extends React.Component {
  render() {
    return (
      <ChartView style={{height:300}} config={this.props.config}></ChartView>
    );
  }
}
