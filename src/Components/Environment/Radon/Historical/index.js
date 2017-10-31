import React, { Component } from 'react';

import Charts from './Charts';

export default class Historical extends Component {
  render() {
    return <Charts historical={this.props.historical} />
  }
}
