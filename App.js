import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { Root, Drawer } from 'native-base';

import { StackNavigator } from 'react-navigation';

import Screens from './src/Screens';
import reducer from './src/Storage/Reducers';
import Sidebar from './src/Components/Sidebar/Sidebar';


const AppNavigator = StackNavigator({
  Home: { screen: Screens.Loading },
  Main: { screen: Screens.Main },
  Zip: { screen: Screens.Zip }
},
{
  title: 'I am app',
});

const store = createStore(reducer);

export default () => {
  const closeDrawer = () => {
    console.log('in close');
    this.drawer._root.close();
  };
  const openDrawer = () => {
    console.log('in open');
    this.drawer._root.open();
  };

  return (
    <Provider store={store}>
      <Root>
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<Sidebar />}
          onClose={closeDrawer}>
          <AppNavigator screenProps={{ openDrawer }} />
        </Drawer>
      </Root>

      </Provider>
  )

}
// export default () => ();
