import water from './Reducer';
import { UPDATE_WATER_COMPLETE } from './Actions';

it('returns a default', () => {
  const correct = {};

  expect(water()).toEqual(correct);
});

it('processes properly', () => {
  const input = {
    "type":"water",
    "characteristics":[
      {"characteristic":"Chloride","count":16,"median":46.11},
      {"characteristic":"Dissolved oxygen (DO)","count":17,"median":10.55},
      {"characteristic":"Iron","count":17,"median":0.67},
      {"characteristic":"Manganese","count":17,"median":0.09},
      {"characteristic":"Nitrogen","count":15,"median":1.85},
      {"characteristic":"pH","count":33,"median":7.89},
      {"characteristic":"Phosphorus","count":17,"median":0.15},
      {"characteristic":"Specific conductance","count":33,"median":432.0},
      {"characteristic":"Sulfate","count":16,"median":41.21},
      {"characteristic":"Total suspended solids","count":12,"median":12.0}
    ],
    "data":[46.11,10.55,0.67,0.09,1.85,7.89,0.15,432.0,41.21,12.0],
    "characteristic_data":["Chloride","Dissolved oxygen (DO)","Iron","Manganese","Nitrogen","pH","Phosphorus","Specific conductance","Sulfate","Total suspended solids"],
    "year":2016,
    "location_name":"BEAVER RIVER - WQN0906",
    "id":1
  };

  const correct = {
    characteristics: {
      chloride: {name: "Chloride","count":16,"median":46.11},
      "dissolved-oxygen-do": {name: "Dissolved oxygen (DO)","count":17,"median":10.55},
      iron: {name: "Iron","count":17,"median":0.67},
      manganese: {name: "Manganese","count":17,"median":0.09},
      nitrogen: {name: "Nitrogen","count":15,"median":1.85},
      ph: {name: "pH","count":33,"median":7.89},
      phosphorus: {name: "Phosphorus","count":17,"median":0.15},
      "specific-conductance": {name: "Specific conductance","count":33,"median":432.0},
      sulfate: {name: "Sulfate","count":16,"median":41.21},
      "total-suspended-solids": {name: "Total suspended solids","count":12,"median":12.0}
    },
    year: 2016,
    location: "BEAVER RIVER - WQN0906",
  };

  expect(water({}, { type: UPDATE_WATER_COMPLETE, newData: input })).toEqual(correct);
})
