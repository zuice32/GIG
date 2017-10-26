import React, { Component } from 'react';

import Chart from '../../../Common/Chart';

const meanChart={
        chart: {
            type: 'spline',
        },
        title: {
            text: 'Results Since 1990'
        },
        xAxis: {
            type: 'datetime',
        },
        yAxis: {
          title: { text: null },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            data: [
                 [Date.UTC(1990, 1, 1), 4],
                 [Date.UTC(1991, 1, 1), 6],
                 [Date.UTC(1992, 1, 1), 1],
                 [Date.UTC(1993, 1, 1), 3],
                 [Date.UTC(1994, 1, 1), 88],
                 [Date.UTC(1995, 1, 1), 7],
                 [Date.UTC(1996, 1, 1), 50],
                 [Date.UTC(1997, 1, 1), 2],
                 [Date.UTC(1998, 1, 1), 55],
                 [Date.UTC(1999, 1, 1), 33],
                 [Date.UTC(2000, 1, 1), 5],
                 [Date.UTC(2001, 1, 1), 22],
                 [Date.UTC(2002, 1, 1), 1],
                 [Date.UTC(2003, 1, 1), 3],
                 [Date.UTC(2004, 1, 1), 9],
             ]
        }]
    };

export default class Charts extends Component {
  render() {
    return <Chart config={meanChart} />
  }
}
