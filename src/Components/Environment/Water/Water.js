import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import {
  Content,
  Text,
  H1, H2,
  View,
} from 'native-base';

import Circle from '../../Common/Circle';
import Location from './Location';
import MoreInformation from './MoreInformation';

class Water extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  }
  render() {
    return (
      <Content>
        <Content padder>
          <Location closest={this.props.location} />

          <H1>Uses - Recreation</H1>

          <H2>Fishing</H2>
          <View style={styles.list}>
            <Circle
              level={this.props["dissolved-oxygen"].median}
              label={this.props["dissolved-oxygen"].name}
              severeLevel={6}
              warningLevel={5} />
            <Circle
              level={this.props.ph.median}
              label={this.props.ph.name}
              severeLevel={6}
              warningLevel={5} />
          </View>

          <H2>Swimming</H2>
          <View style={styles.list}>
            <Circle
              level={this.props["total-suspended-solids"].median}
              label={this.props["total-suspended-solids"].name}
              severeLevel={20}
              warningLevel={5} />
            <Circle
              level={this.props.bacteria.median}
              label={this.props.bacteria.name}
              severeLevel={400}
              warningLevel={200} />
          </View>

          <H1>Impacts</H1>

          <H2>Mining</H2>
          <View style={styles.list}>
            <Circle
              level={this.props.iron.median}
              label={this.props.iron.name}
              severeLevel={1.5}
              warningLevel={1.5} />
            <Circle
              level={this.props.manganese.median}
              label={this.props.manganese.name}
              severeLevel={1}
              warningLevel={1} />
            <Circle
              level={this.props.sulfate.median}
              label={this.props.sulfate.name}
              severeLevel={250}
              warningLevel={20} />
          </View>

          <H2>Farming</H2>
          <View style={styles.list}>
            <Circle
              level={this.props.nitrogen.median}
              label={this.props.nitrogen.name}
              severeLevel={2}
              warningLevel={1} />
            <Circle
              level={this.props.phosphorus.median}
              label={this.props.phosphorus.name}
              severeLevel={.2}
              warningLevel={.1} />
          </View>

          <H2>Urban</H2>
          <View style={styles.list}>
            <Circle
              level={this.props["specific-conductance"].median}
              label={this.props["specific-conductance"].name}
              severeLevel={600}
              warningLevel={300} />
            <Circle
              level={this.props.chloride.median}
              label={this.props.chloride.name}
              severeLevel={250}
              warningLevel={15} />
          </View>

          <Text>
            Information is collected through a collaborative sampling effort of
            PADEP&apos;s Water Quality Network.  This information, a generic
            cutoff, is not necessarily related to regulations and is provided
            for educational purposes.
          </Text>
        </Content>
        <MoreInformation />
      </Content>
    )
  }
}
export const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});

const mapStateToProps = state => ({
  location: state.water.location,
  bacteria: state.water.characteristics.bacteria,
  chloride: state.water.characteristics.chloride,
  "dissolved-oxygen": state.water.characteristics["dissolved-oxygen"],
  iron: state.water.characteristics.iron,
  manganese: state.water.characteristics.manganese,
  nitrogen: state.water.characteristics.nitrogen,
  ph: state.water.characteristics.ph,
  phosphorus: state.water.characteristics.phosphorus,
  "specific-conductance": state.water.characteristics["specific-conductance"],
  sulfate: state.water.characteristics.sulfate,
  "total-suspended-solids": state.water.characteristics["total-suspended-solids"]
});

export default connect(mapStateToProps)(Water);
