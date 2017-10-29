import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import { Root, Drawer } from 'native-base';

import { StackNavigator, addNavigationHelpers, DrawerNavigator } from 'react-navigation';

import createSagaMiddleware from 'redux-saga';

import Screens from './src/Screens';
import reducer from './src/Storage/Reducers';
import Sidebar from './src/Components/Sidebar/Sidebar';

import AppNavigator from './src/Navigators/AppNavigator';

import sagaManager from './src/Sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  {
    location: {
      zip: '18847',
    },
    radon: {
      "type": "radon",
      "zip": "17101",
      "average": 0.9400000000000001,
      "median": 0,
      "numberOfTests": 5,
      "limitMin": 4,
      "limitMax": 20,
      "minColorRGB": "RGB(0,128,0)",
      "maxColorRGB": "RGB(255,0,0)",
      "minYear": 2016,
      "maxYear": 2016,
      "averageColorRGB": null,
      "id": 0
    },
  },
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(sagaManager);


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
