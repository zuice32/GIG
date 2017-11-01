import { call, put } from 'redux-saga/effects';

import {
  syncZip,
  syncCoords,
} from '../Storage/Location/Actions';

import {
  updateRadonDataFn,
} from './Radon';

import {
  updateWaterDataFn,
} from './Water';

import Api from '../Api';

export const updateZipCodeFn = function* updateZipCode(action) {
  try {
    console.log('updateZipCodeFn');
    const coords = yield call(Api.Location.coordinatesFromZip, action.zip);
    yield call(coordsDataUpdatesFn, coords);
    yield call(zipDataUpdatesFn, zip);
  }
  catch (e) {

  }
}

export const updateCoordsFn = function* updateCoords(action) {
  try {
    console.log('updateCoordsFn');
    action.coords.latitude = 40.8878;
    action.coords.longitude = -80.3343;
    const zip = yield call(Api.Location.zipFromCoordinates, action.coords.latitude, action.coords.longitude);
    yield call(zipDataUpdatesFn, zip);

    yield call(coordsDataUpdatesFn, action.coords);
  }
  catch (e) {
    console.log(e);
  }
}

export const zipDataUpdatesFn = function* zipDataUpdates(zip) {
  try {
    yield put(syncZip(zip));
    yield call(updateRadonDataFn, zip);
  }
  catch (e) {
    console.log(e);
  }
}

export const coordsDataUpdatesFn = function* coordsDataUpdates(coords) {
  try {
    console.log('updating coordinate data', coords);
    yield call(updateWaterDataFn, coords);
  }
  catch (e) {
    console.log(e);
  }
}
