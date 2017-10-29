import { UPDATE_WATER_COMPLETE } from './Actions';

initialState = {};

const location = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case UPDATE_WATER_COMPLETE:
      return action.newData;
      break;
    default:
      return state;
  }
}

export default location;
