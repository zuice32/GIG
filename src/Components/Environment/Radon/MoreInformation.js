import React, { Component } from 'react';
import {
  List, ListItem, Text,
  Separator,
} from 'native-base';

import LinkToTesting from './LinkToTesting';

export default class MoreInformation extends Component {
  render() {
    //http://www.dep.pa.gov/BUSINESS/RADIATIONPROTECTION/Pages/default.aspx
    //https://www.cdc.gov/nceh/radiation/brochure/profile_radon.htm
    return (
      <List>
        <ListItem>
          <LinkToTesting url='http://www.monksp.org' />
        </ListItem>
        <ListItem>
          <Text>PADEP Radon Hotline</Text>
          <Text>800-237-2366</Text>
        </ListItem>
        <ListItem>
          <Text>dep.pa.gov</Text>
        </ListItem>
        <Separator bordered><Text>More Information</Text></Separator>
        <ListItem>
          <Text>Bureau of Radiation Protection</Text>
        </ListItem>
        <ListItem>
          <Text>More Information from the CDC</Text>
        </ListItem>
      </List>
    )
  }
}
