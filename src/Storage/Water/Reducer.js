import slug from 'slug';

import { UPDATE_WATER_COMPLETE } from './Actions';

const initialState = {};

const processCharacteristics = rawCharacteristics => {
  const updated = {};
  rawCharacteristics.forEach(characteristic => {
    const key = slug(characteristic.characteristic.toLowerCase());
    updated[key] = {
      name: characteristic.characteristic,
      count: characteristic.count,
      median: characteristic.median,
    };
  })
  return updated;
}

const water = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_WATER_COMPLETE:
      return {
        characteristics: processCharacteristics(action.newData.characteristics),
        location: action.newData.location_name,
        year: action.newData.year,
      };
    default:
      return state;
  }
}

export default water;
