import radon from './Reducer';
import { UPDATE_RADON_COMPLETE } from './Actions';

it('returns a default', () => {
  const correct = {};

  expect(radon()).toEqual(correct);
});

it('processes properly', () => {
  const input = {
    "type":"radon",
    "zip":"17101",
    "average":0.94,
    "minValue":0.5,
    "maxValue":1.6,
    "median":1.0,
    "numberOfTests":5,
    "limitMin":4,
    "limitMax":20,
    "minColorRGB":
    "RGB(0,0,255)",
    "maxColorRGB":"RGB(255,0,0)",
    "year":2016,
    "averageColorRGB":null,
    "year_data":[1995,1990,1991,1996,1992,1998,1999,1994,1993,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
    "average_data":[1.99,3.46,2.9,17.92,10.08,13.04,6.73,1.95,1.07,3.59,9.91,3.04,5.64,5.62,4.91,4.21,22.48,2.59,0.92,1.01,5.1,0.66,0.76,0.65,0.73,0.94],
    "id":"59f7cb4eab028a2be0c902b8"
  };

  const correct = {
    "average":0.94,
    "minimum":0.5,
    "maximum":1.6,
    "numberOfTests":5,
    "limitMin":4,
    "limitMax":20,
    "historicalAverages": [
      [1995, 1.99], [1990, 3.46], [1991, 2.9], [1996, 17.92], [1992, 10.08], [1998, 13.04],
      [1999, 6.73], [1994, 1.95], [1993, 1.07], [2000, 3.59], [2001, 9.91], [2002, 3.04],
      [2003, 5.64], [2004, 5.62], [2005, 4.91], [2006, 4.21], [2007, 22.48], [2008, 2.59],
      [2009, 0.92], [2010, 1.01], [2011, 5.1], [2012, 0.66], [2013, 0.76], [2014, 0.65],
      [2015, 0.73], [2016, 0.94],
    ],
  };

  expect(radon({}, { type: UPDATE_RADON_COMPLETE, newData: input })).toEqual(correct);
})
