import { UPDATE_ZIP, UPDATE_COORDS } from './Actions';
import location from './Reducer';

it('returns a default state', () => {
  const initialState = { foo: undefined, bar: undefined };
  const newState = location(initialState, {});

  expect(newState).toEqual(initialState);
});

it('updates zip', () => {
  const zip = 'foo';
  const initialState = {};
  const newState = location(initialState, { type: UPDATE_ZIP, zip });

  expect(newState).toEqual({ zip });
});

it('updates coordinates', () => {
  const coords = 'foo';
  const initialState = {};
  const newState = location(initialState, { type: UPDATE_COORDS, coords });

  expect(newState).toEqual({ coords });
});

it('returns a default state with none provided', () => {
  const newState = location();

  expect(newState).toEqual({
    zip: undefined,
    coords: undefined,
    provided: false,
  });
});

// const location = (state = initialState, action) => {
//   switch (action.type) {
//     case UPDATE_ZIP:
//       return { ...state, zip: action.zip };
//     case UPDATE_COORDS:
//       return { ...state, coords: action.coords };
//     default:
//       return state;
//   }
// }
