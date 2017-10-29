import { UPDATE_WATER_COMPLETE } from './Actions';

const location = (state, action = {}) => {
  switch (action.type) {
    case UPDATE_WATER_COMPLETE:
      return action.newData;
      break;
    default:
      return state;
  }
}

export default location;
