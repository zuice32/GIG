import React, { Component } from 'react';

import Chart from '../../../Common/Chart';

export default class Charts extends Component {
  render() {
    const Highcharts='Highcharts';
    let averages = [];
    let chartMax = 20;

    this.props.historical.forEach(item => {
      // Determine the fill color
      let fill;
      if (item[1] > 20) {
        fill = 'red';
        fillLine = 'red'
      }
      else if (item[1] > 10) {
        fill = 'yellow'
        fillLine = 'black';
      }
      else {
        fill = 'blue';
        fillLine = 'blue';
      }

      // Populate the averages array
      averages.push({
        x: item[0],
        y: item[1],
        marker: { fillColor: fill, lineColor: fillLine }
      });

      // Bump up the top of the cart if it's not too high.
      if (item[1] > chartMax && item[1] <= 50) {
        chartMax = item[1]
      }
    });
    averages.sort((a, b) => {
      if (a.x === b.x) {
        return 0;
      }
      return (a.x < b.x) ? -1 : 1;
    });

    console.log(averages);
    const config = {
      title: { text: 'Radon Test Result Averages Since 1990' },
      xAxis: { type: 'Year' },
      yAxis: { title: { text: 'Average pCi/L' }, min: 0, max: chartMax },
      tooltip: { crosshairs: true, shared: true, valueSuffix: ' pCi/L' },
      exporting: { enabled: false },
      legend: {
        enabled: false
      },
      series: [
        { name: 'Test Result Average', data: averages, zIndex: 1, marker: { lineWidth: 2 } },
      ]
    };
    return <Chart config={config} />
  }
}
