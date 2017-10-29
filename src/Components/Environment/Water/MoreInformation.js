import React, { Component } from 'react';
import {
  List, ListItem, Text, Button,
  Separator, Icon, Left, Body
} from 'native-base';

import Link from '../../Common/Link';

export default class MoreInformation extends Component {
  render() {
    return (
      <List>
        <ListItem icon>
          <Left><Button success><Icon name="call" /></Button></Left>
          <Body><Text>Water Hotline - 800-237-2366</Text></Body>
        </ListItem>
        <Separator bordered><Text>More Information</Text></Separator>
        <ListItem>
          <Link url={'http://padep-1.maps.arcgis.com/apps/Cascade/index.html?appid=d3ad8b96c3344a2aaeb7de6f1d310329'}>
            <Text>Story Map on other PADEP Monitoring</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link url={'http://www.dep.pa.gov/DataandTools/Webinars/Pages/Water-Management.aspx'}>
            <Text>PADEP Water Management</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link url={'http://www.padep-1.maps.arcgis.com/apps/Cascade/index.html?appid=226b2b211887475394097b99797a1a25'}>
            <Text>Susquehanna River Story Map</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link url={'http://www.depgis.state.pa.us/WQN/'}>
            <Text>Water Quality Network Viewer</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link url={'http://www.dep.pa.gov/Business/Water/CleanWater/WaterQuality/Pages/Water-Quality-Network.aspx'}>
            <Text>PADEP Water Quality Network</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link url={'http://data.pa.gov'}>
            <Text>PA Open Data Portal</Text>
          </Link>
        </ListItem>
      </List>
    )
  }
}
