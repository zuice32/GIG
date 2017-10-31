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
      "average":0.94,
      "minimum":0.5,
      "maximum":1.6,
      "numberOfTests":5,
      "limitMin":4,
      "limitMax":20,
      "historicalAverages": [
        [1995, 1.99], [1990, 3.46], [1991, 2.9], [1996, 17.92], [1992, 10.08], [1998, 13.04],
        [1999, 6.73], [1994, 1.95], [1993, 1.07], [2000, 3.59], [2001, 9.91], [2002, 3.04],
        [2003, 5.64], [2004, 5.62], [2005, 4.91], [2006, 4.21], [2007, 22.48], [2008, 2.59],
        [2009, 0.92], [2010, 1.01], [2011, 5.1], [2012, 0.66], [2013, 0.76], [2014, 0.65],
        [2015, 0.73], [2016, 0.94],
      ],
    },
    water: {
      characteristics: {
        chloride: {name: "Chloride","count":16,"median":46.11},
        "dissolved-oxygen-do": {name: "Dissolved oxygen (DO)","count":17,"median":10.55},
        iron: {name: "Iron","count":17,"median":0.67},
        manganese: {name: "Manganese","count":17,"median":0.09},
        nitrogen: {name: "Nitrogen","count":15,"median":1.85},
        ph: {name: "pH","count":33,"median":7.89},
        phosphorus: {name: "Phosphorus","count":17,"median":0.15},
        "specific-conductance": {name: "Specific conductance","count":33,"median":432.0},
        sulfate: {name: "Sulfate","count":16,"median":41.21},
        "total-suspended-solids": {name: "Total suspended solids","count":12,"median":12.0}
      },
      year: 2016,
      location: "BEAVER RIVER - WQN0906",
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
