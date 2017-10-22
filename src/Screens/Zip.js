import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import {
  Container, Content, Form, Item, Label, Input, Icon, Button, Text, Toast, List, ListItem, Header,
} from 'native-base';

import { updateCoords, updateZip } from '../Storage/Location/Actions'

export default class ZipForm extends Component {
  static navigationOptions = {
    title: 'Enter a zip code',
  };

  constructor(props) {
    super(props);
    this.trackInput = this.trackInput.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onEndEditing = this.onEndEditing.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.useGeolocation = this.useGeolocation.bind(this);

    this.state = {
      zip: '',
      showError: false,
    };
  }

  componentDidMount() {
      this.input._root.focus();
  }

  validateZip(zip) {
    return zip.toString().match(/[0-9]{5}/);
  }

  onSubmit(ev) {
    // onSubmitEditing for the input, and for the button's press action.

  }

  showErrorMessage() {
    this.setState({ showError: true });
  }

  submitZip() {

  }

  trackInput(input) {
    this.input = input;
  }

  onFocus() {
    this.setState({ showError: false });
  }
  onChangeText(text) {
    this.setState({ zip: text })
  }

  onEndEditing() {
    console.log(`validating ${this.state.zip}`);
    if (this.state.zip !== '' && !this.validateZip(this.state.zip)) {
      console.log('erroring');
      this.showErrorMessage();
    }
  }

  useGeolocation() {
      this.props.navigation.dispatch(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.back({ routeName: 'Main' }),
        ]
      }));
  }

  render() {
    const errorMessage = this.state.showError ? <Text style={styles.errorMessage}> (should be five numbers)</Text> : null;
    return (
      <Container>
        <Content padder>
          <Form>
              <Item floatingLabel>
                <Label>Zip Code{errorMessage}</Label>
                <Input
                  keyboardType={'numeric'}
                  maxLength={5}
                  value={this.state.zip}
                  getRef={this.trackInput}
                  onChangeText={this.onChangeText}
                  onEndEditing={this.onEndEditing}
                  onFocus={this.onFocus}
                  />
              </Item>
              <Button block primary><Text>Use this zip code</Text></Button>
              <Button block primary style={styles.locationAlternate} onPress={this.useGeolocation}>
                <Text>Use current location instead</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
  },
  locationAlternate: {
    marginTop: 17,
  }
});

const mapDispatchToProps = dispatch => ({
  updateZipCode: zip => { dispatch(updateZip(zip)); },
  updateLatLong: coords => { dispatch(updateCoords(coords)); },
});
