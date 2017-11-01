import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import Screens from '../Screens';

const AppNavigator = StackNavigator({
  Home: { screen: Screens.Unloaded },
  Main: { screen: Screens.Main },
  Zip: { screen: Screens.Zip }
},
{
  title: 'I am app',
});

export default AppNavigator;
