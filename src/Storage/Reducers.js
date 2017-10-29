import { combineReducers } from 'redux';

import location from './Location/Reducer';
import radon from './Radon/Reducer';
import water from './Water/Reducer';

const reducer = combineReducers({
  location,
  radon,
  water,
});

export default reducer;
