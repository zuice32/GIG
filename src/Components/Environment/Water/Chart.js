import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import ChartView from 'react-native-highcharts';

class Chart extends React.Component {
  render() {
    const Highcharts='Highcharts';
    const standardConf={
      chart: { zoomType: 'xy' },
      title: { text: 'Median Readings and Acceptable Limits in Waterways' },
      xAxis: [{
        categories: ['Fishing: *Dis Oxy', 'Fishing: pH', 'Swimming: Solids', 'Farm Impact: Nitrogen', 'Farm Impact: Phosphorous', 'Mining Impact: Iron', 'Mining Impact: Manganese', 'Mining Impact: Sulfate', 'Urban Impact: Sp Conduct', 'Urban Impact: Chlorides', 'Bork:  Bork Bork'],
        crosshair: true
      }],
      yAxis: [{ // Primary yAxis
        labels: {
          format: '{value}',
          style: { color: '#000000' }
        },
        title: {
          text: 'Acceptable Limit',
          style: { color: '#000000' }
        }
      }, { // Secondary yAxis
        title: {
          text: 'Median Measurement',
          style: { color: '#000080' }
        },
        labels: {
          format: '{value}',
          style: { color: '#000080' }
        },
        opposite: true
      }],
      tooltip: { shared: true },
      legend: {
        layout: 'vertical',
        align: 'left',
        x: 150,
        verticalAlign: 'top',
        y: 50,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
      },
      exporting: { enabled: false },
      series: [{
        name: 'Median Value',
        type: 'column',
        yAxis: 1,
        data: [
          // 10, 8, 18, 2.9, 1.4, .1, 3, .92, 3, 4.6, 1.8, 5.4
          this.props["dissolved-oxygen-do"].median,
          this.props.ph.median,
          this.props["total-suspended-solids"].median,
          this.props.nitrogen.median,
          this.props.phosphorus.median,
          this.props.iron.median,
          this.props.manganese.median,
          this.props.sulfate.median,
          this.props["specific-conductance"].median,
          this.props.chloride.median,
        ],
        tooltip: { valueSuffix: 'mg/L' }
      }, {
        name: 'Acceptable Limits',
        type: 'spline',
        data: [6, 6, 20, 4, 2.0, .2, 1.5, 1.0, 2.5, 6, 2.5, .99999],
        tooltip: { valueSuffix: 'Units' }
      }]
    };
    const conf = Object.assign({}, standardConf, this.props.conf);
    return (
      <View><ChartView style={{height:300}} config={conf}></ChartView></View>
    );

  }
}

Chart.defaultProps = {
  conf: {},
  chloride: { median: 0 },
  "dissolved-oxygen-do": { median: 0 },
  iron: { median: 0 },
  manganese: { median: 0 },
  nitrogen: { median: 0 },
  ph: { median: 0 },
  phosphorus: { median: 0 },
  "specific-conductance": { median: 0 },
  sulfate: { median: 0 },
  "total-suspended-solids": { median: 0 },
};

Chart.propTypes = {
  conf: PropTypes.object,
};

const mapStateToProps = state => ({
  chloride: state.water.chloride,
  "dissolved-oxygen-do": state.water["dissolved-oxygen-do"],
  iron: state.water.iron,
  manganese: state.water.manganese,
  nitrogen: state.water.nitrogen,
  ph: state.water.ph,
  phosphorus: state.water.phosphorus,
  "specific-conductance": state.water["specific-conductance"],
  sulfate: state.water.sulfate,
  "total-suspended-solids": state.water["total-suspended-solids"]
});

export default connect(mapStateToProps)(Chart)
