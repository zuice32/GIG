import water from './Reducer';
import { UPDATE_WATER_COMPLETE } from './Actions';

it('returns a default', () => {
  const correct = {};

  expect(water()).toEqual(correct);
});

it('processes properly', () => {
  const input = {
    "latitude":40.8878,
    "longitude":-80.3343,
    "type":"water",
    "characteristics":[
      {"characteristic":"Fishing: *dis oxy","count":96,"median":9.8},
      {"characteristic":"Fishing: pH","count":211,"median":7.8},
      {"characteristic":"Swimming: Solids","count":92,"median":14.0},
      {"characteristic":"Swimming: Bacteria","count":0,"median":0.0},
      {"characteristic":"Farm Impact: Nitrogen","count":106,"median":1.9},
      {"characteristic":"Farm Impact: Phosphorus","count":116,"median":0.13},
      {"characteristic":"Mining Impact: Iron","count":116,"median":0.6},
      {"characteristic":"Mining Impact: Manganese","count":116,"median":0.1},
      {"characteristic":"Mining Impact: Sulfate","count":115,"median":45.42},
      {"characteristic":"Urban Impact: Sp Conduct","count":200,"median":462.0},
      {"characteristic":"Urban Impact: Chlorides","count":98,"median":49.42}
    ],
    "data":[9.8,7.8,14.0,0.0,1.9,0.13,0.6,0.1,45.42,462.0,49.42],
    "characteristic_data":["Fishing: *dis oxy","Fishing: pH","Swimming: Solids","Swimming: Bacteria","Farm Impact: Nitrogen","Farm Impact: Phosphorus","Mining Impact: Iron","Mining Impact: Manganese","Mining Impact: Sulfate","Urban Impact: Sp Conduct","Urban Impact: Chlorides"],
    "year":2001,
    "location_name":"BEAVER RIVER - WQN0906",
    "id":"59f9231c1bb09e0c64b0d93f"
  };

  const correct = {
    characteristics: {
      bacteria: {count: 0,median: -1,name: "Bacteria"},
      chloride: {name: "Chloride","count":98,"median":49.42},
      "dissolved-oxygen": {name: "Dissolved oxygen","count":96,"median":9.8},
      iron: {name: "Iron","count":116,"median":0.6},
      manganese: {name: "Manganese","count":116,"median":0.1},
      nitrogen: {name: "Nitrogen","count":106,"median":1.9},
      ph: {name: "pH","count":211,"median":7.8},
      phosphorus: {name: "Phosphorus","count":116,"median":0.13},
      "specific-conductance": {name: "Specific conductance","count":200,"median":462.0},
      sulfate: {name: "Sulfate","count":115,"median":45.42},
      "total-suspended-solids": {name: "Total suspended solids","count":92,"median":14.0}
    },
    year: 2001,
    location: "BEAVER RIVER - WQN0906",
  };

  expect(water({}, { type: UPDATE_WATER_COMPLETE, newData: input })).toEqual(correct);
})
