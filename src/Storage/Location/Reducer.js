import { SYNC_ZIP, SYNC_COORDS } from './Actions';

const initialState = {
  provided: false,
  zip: undefined,
  coords: undefined,
};

const location = (state = initialState, action = {}) => {
  switch (action.type) {
    case SYNC_ZIP:
      return { ...state, zip: action.zip, provided: true };
    case SYNC_COORDS:
      return { ...state, coords: action.coords, provided: true };
    default:
      return state;
  }
}

export default location;
