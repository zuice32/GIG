import slug from 'slug';

import { UPDATE_WATER_COMPLETE } from './Actions';

const initialState = {};

const map = {
  "Fishing: *dis oxy": "Dissolved oxygen",
  "Fishing: pH": "pH",
  "Swimming: Solids": "Total suspended solids",
  "Swimming: Bacteria": "Bacteria",
  "Farm Impact: Nitrogen": "Nitrogen",
  "Farm Impact: Phosphorus": "Phosphorus",
  "Mining Impact: Iron": "Iron",
  "Mining Impact: Manganese": "Manganese",
  "Mining Impact: Sulfate": "Sulfate",
  "Urban Impact: Sp Conduct": "Specific conductance",
  "Urban Impact: Chlorides": "Chloride"
};

const processCharacteristics = rawCharacteristics => {
  const updated = {};
  rawCharacteristics.forEach(characteristic => {
    const mappedName = map[characteristic.characteristic];
    const key = slug(mappedName.toLowerCase());
    updated[key] = {
      name: mappedName,
      count: characteristic.count,
      median: characteristic.count > 0 ? characteristic.median : -1,
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
