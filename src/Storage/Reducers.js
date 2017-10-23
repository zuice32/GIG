import { combineReducers } from 'redux';

import location from './Location/Reducer';
import radon from './Radon/Reducer';

const reducer = combineReducers({
  location,
  radon,
});

export default reducer;
