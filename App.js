import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { Root } from 'native-base';

import { StackNavigator } from 'react-navigation';

import Screens from './src/Screens';
import reducer from './src/Storage/Reducers';

const AppNavigator = StackNavigator({
  Home: { screen: Screens.Loading },
  Main: { screen: Screens.Main },
  Zip: { screen: Screens.Zip }
},
{
  title: 'I am app',
});

const store = createStore(reducer);

export default () => (<Provider store={store}><Root><AppNavigator /></Root></Provider>);
