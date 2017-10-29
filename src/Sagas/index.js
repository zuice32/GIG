import 'regenerator-runtime/runtime';
import { takeEvery } from 'redux-saga/effects';

import {
  UPDATE_ZIP,
  UPDATE_COORDS,
} from '../Storage/Location/Actions';
import { updateZipCodeFn, updateCoordsFn } from './Location';

const rootSagaFn = function* rootSaga () {
  try {
    yield takeEvery(UPDATE_ZIP, updateZipCodeFn);
    yield takeEvery(UPDATE_COORDS, updateCoordsFn);
  }
  catch (e) {
    console.log(e);
  }
}

export default rootSagaFn;
