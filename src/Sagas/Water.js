import { call, put } from 'redux-saga/effects';

import {
  updateWaterData,
} from '../Storage/Water/Actions';

import Api from '../Api';

export const updateWaterDataFn = function* update(coords) {
  try {
    const data = yield call(Api.Water.currentDataForLocation, coords);
    console.log('water data', data);
    yield put(updateWaterData(data));
  }
  catch (e) {
    console.log(e);
  }
}
