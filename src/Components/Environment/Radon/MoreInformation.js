import React, { Component } from 'react';
import {
  List, ListItem, Text, Icon,
  Separator, Left, Button, Body
} from 'native-base';

import Link from '../../Common/Link';

export default class MoreInformation extends Component {
  render() {
    return (
      <List>
        <ListItem icon>
          <Left>
              <Button iconLeft success><Link url={'tel:8002372366'}><Icon name="call" /></Link></Button>
          </Left>
          <Body>
            <Link url={'tel:8002372366'}>
              <Text>PADEP Radon Hotline - 800-237-2366</Text>
            </Link>
          </Body>
        </ListItem>
        <ListItem>
          <Link url={'http://dep.pa.gov'}><Text>dep.pa.gov</Text></Link>
        </ListItem>
        <ListItem>
          <Link url={'http://www.dep.pa.gov/Business/RadiationProtection/RadonDivision/Pages/Radon-in-the-home.aspx'}>
            <Text>Learn how to perform your own radon test</Text>
          </Link>
        </ListItem>
        <Separator bordered><Text>More Information</Text></Separator>
        <ListItem>
          <Link url={'http://www.dep.pa.gov/BUSINESS/RADIATIONPROTECTION/Pages/default.aspx'}>
            <Text>Bureau of Radiation Protection</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link url={'https://www.cdc.gov/nceh/radiation/brochure/profile_radon.htm'}>
            <Text>More Information from the CDC</Text>
          </Link>
        </ListItem>
      </List>
    )
  }
}
