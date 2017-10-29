import { call, put } from 'redux-saga/effects';

import {
  updateRadonData,
} from '../Storage/Radon/Actions';

import Api from '../Api';

export const updateRadonDataFn = function* update(zip) {
  try {
    const data = yield call(Api.Radon.currentDataForLocation, 17101);
    console.log(data);
    yield put(updateRadonData(data));
  }
  catch (e) {
    console.log(e);
  }
}
