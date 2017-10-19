import { combineReducers } from 'redux';

import location from './Location/Reducer';

const reducer = combineReducers({
  location
});

export default reducer;
