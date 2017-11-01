import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import location from './Location/Reducer';
import radon from './Radon/Reducer';
import water from './Water/Reducer';

const config = {
  key: 'app',
  storage,
};
const reducer = persistCombineReducers(config, {
  location,
  radon,
  water,
});

export default reducer;
