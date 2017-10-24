import React, { Component } from 'react';
import {
  List, ListItem, Text,
  Separator,
} from 'native-base';

export default class MoreInformation extends Component {
  render() {
    //http://padep-1.maps.arcgis.com/apps/Cascade/index.html?appid=d3ad8b96c3344a2aaeb7e6f1d310329
    //http://www.dep.pa.gov/DataandTools/Webinars/Pages/Water-Management.aspx
    //http://www.padep-1.maps.arcgis.com/apps/Cascade/index.html?appid=226b2b211887475394097b99797a1a25
    //http://www.depgis.state.pa.us/WQN/
    //http://www.dep.pa.gov/Business/Water/CleanWater/WaterQuality/Pages/Water-Quality-Network.aspx
    //http://data.pa.gov
    return (
      <List>
        <Separator bordered><Text>More Information</Text></Separator>
        <ListItem>
          <Text>Story Map on other PADEP Monitoring</Text>
        </ListItem>
        <ListItem>
          <Text>PADEP Water Management</Text>
        </ListItem>
        <ListItem>
          <Text>Susquehanna River Story Map</Text>
        </ListItem>
        <ListItem>
          <Text>Water Quality Network Viewer</Text>
        </ListItem>
        <ListItem>
          <Text>PADEP Water Quality Network</Text>
        </ListItem>
        <ListItem>
          <Text>PA Open Data Portal</Text>
        </ListItem>
      </List>
    )
  }
}
