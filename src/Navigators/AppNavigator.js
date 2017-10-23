import React, { Component } from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import Screens from '../Screens';

const AppNavigator = StackNavigator({
  Home: { screen: Screens.Main },
  Zip: { screen: Screens.Zip }
},
{
  title: 'I am app',
});

export default AppNavigator;
