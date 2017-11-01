import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { Root, Drawer } from 'native-base';

import { StackNavigator, addNavigationHelpers, DrawerNavigator } from 'react-navigation';

import Screens from './src/Screens';
import Sidebar from './src/Components/Sidebar/Sidebar';

import AppNavigator from './src/Navigators/AppNavigator';

import store from './src/Storage';

export default class App extends Component {
  state = { isReady: false };
  nav = undefined;

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    const closeDrawer = () => {
      this.drawer._root.close();
    };
    const openDrawer = () => {
      this.drawer._root.open();
    };
    const dispatchNavigateAction = action => {
      this.nav.dispatch(action);
      closeDrawer();
    };

    return (
      <Provider store={store}>
        <Root>
          <Drawer
            ref={(ref) => { this.drawer = ref; }}
            content={<Sidebar closeDrawer={closeDrawer} dispatch={dispatchNavigateAction} />}
            onClose={closeDrawer}>
            <AppNavigator
              ref={(ref) => { this.nav = ref; }}
              screenProps={{ openDrawer }}
            />
          </Drawer>
        </Root>
      </Provider>
    );
  }
};
