import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Location as LocationApi, Permissions } from 'expo';
import ActionButton from 'react-native-action-button';
import { Icon } from 'native-base';

import { updateCoords, updateZip } from '../../Storage/Location/Actions';

export default class Location extends Component {
  constructor(props) {
    super(props);

    this.getLocation = this.getLocation.bind(this);
  }

  async getLocation() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {

    }

    const location = await LocationApi.getCurrentPositionAsync({});
    console.log(location);

    this.props.updateLatLong({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
    this.props.updateZipCode('18847');
  }

  render() {
    return (
        <ActionButton backgroundColor='#5067FF' offsetY={60} style={{ zIndex: 99999 }}>
          <ActionButton.Item buttonColor='#34A34F' title='Use Current Location' onPress={this.getLocation}>
            <Icon name="pin" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3B5998' title='Search By Zip Code' onPress={() => this.props.navigate('Zip')}>
            <Icon name="search" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
    );
  }

}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
