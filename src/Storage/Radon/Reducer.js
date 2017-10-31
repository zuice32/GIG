import { UPDATE_RADON_COMPLETE } from './Actions';
const initialState = {};

const location = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_RADON_COMPLETE:
      return {
        "average": action.newData.average,
        "minimum": action.newData.minValue,
        "maximum": action.newData.maxValue,
        "numberOfTests": action.newData.numberOfTests,
        "limitMin": action.newData.limitMin,
        "limitMax": action.newData.limitMax,
        "historicalAverages": action.newData.year_data.map((e, i) => [e, action.newData.average_data[i]]),
      };
    default:
      return state;
  }
}

export default location;
