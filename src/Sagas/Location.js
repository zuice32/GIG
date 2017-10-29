import { call, put } from 'redux-saga/effects';

import {
  syncZip,
  syncCoords,
} from '../Storage/Location/Actions';

export const updateZipCodeFn = function* updateZipCode(action) {
  try {
    console.log(action);
    put(syncZip(action.zip));
  }
  catch (e) {

  }
}

export const updateCoordsFn = function* updateCoords(action) {
  try {
    console.log(action);
  }
  catch (e) {

  }
}
