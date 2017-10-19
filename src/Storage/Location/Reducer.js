import { UPDATE_ZIP, UPDATE_COORDS } from './Actions';

const initialState = {
  zip: undefined,
  coords: undefined,
};

const location = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_ZIP:
      return { ...state, zip: action.zip };
    case UPDATE_COORDS:
      return { ...state, coords: action.coords };
    default:
      return state;
  }
}

export default location;
