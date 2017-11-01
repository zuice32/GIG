import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './Reducers';

import sagaManager from '../Sagas';

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
        bacteria: {count: 0,median: -1,name: "Bacteria"},
        chloride: {name: "Chloride","count":98,"median":49.42},
        "dissolved-oxygen": {name: "Dissolved oxygen","count":96,"median":9.8},
        iron: {name: "Iron","count":116,"median":0.6},
        manganese: {name: "Manganese","count":116,"median":0.1},
        nitrogen: {name: "Nitrogen","count":106,"median":1.9},
        ph: {name: "pH","count":211,"median":7.8},
        phosphorus: {name: "Phosphorus","count":116,"median":0.13},
        "specific-conductance": {name: "Specific conductance","count":200,"median":462.0},
        sulfate: {name: "Sulfate","count":115,"median":45.42},
        "total-suspended-solids": {name: "Total suspended solids","count":92,"median":14.0}
      },
      year: 2001,
      location: "BEAVER RIVER - WQN0906",
    }
  },
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(sagaManager);

export default store;
