import { UPDATE_RADON_COMPLETE } from './Actions';
const initialState = {
  level: 0.8,
};

const location = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_RADON_COMPLETE:
      return action.newData;
      break;
    default:
      return state;
  }
}

export default location;
