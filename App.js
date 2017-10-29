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
    water: {
      chloride: {name: "Chloride","count":48,"median":38.86,"year":2015,"id":0},
      "dissolved-oxygen-do": {name: "Dissolved oxygen (DO)","count":44,"median":10.6,"year":2015,"id":0},
      iron: {name: "Iron","count":49,"median":0.45,"year":2015,"id":0},
      manganese: {name: "Manganese","count":49,"median":0.09,"year":2015,"id":0},
      nitrogen: {name: "Nitrogen","count":47,"median":1.64,"year":2015,"id":0},
      ph: {name: "pH","count":92,"median":7.94,"year":2015,"id":0},
      phosphorus: {name: "Phosphorus","count":49,"median":0.11,"year":2015,"id":0},
      "specific-conductance": {name: "Specific conductance","count":92,"median":437.0,"year":2015,"id":0},
      sulfate: {name: "Sulfate","count":48,"median":46.94,"year":2015,"id":0},
      "total-suspended-solids": {name: "Total suspended solids","count":32,"median":12.0,"year":2015,"id":0}
    }
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
