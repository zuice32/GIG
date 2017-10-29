import { call, put } from 'redux-saga/effects';

import {
  syncZip,
  syncCoords,
} from '../Storage/Location/Actions';

import {
  updateRadonDataFn,
} from './Radon';

import Api from '../Api';

export const updateZipCodeFn = function* updateZipCode(action) {
  try {
    yield put(syncZip(action.zip));
    yield call(updateRadonDataFn, action.zip);
  }
  catch (e) {

  }
}

export const updateCoordsFn = function* updateCoords(action) {
  try {
    const zip = yield call(Api.Location.zipFromCoordinates, action.coords.latitude, action.coords.longitude);
    yield put(syncZip(zip));
    yield call(updateRadonDataFn, zip);
    console.log('updateCoords saga complete');
  }
  catch (e) {
    console.log(e);
  }
}
