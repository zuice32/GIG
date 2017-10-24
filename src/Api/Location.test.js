import Location from './Location';

global.fetch = require('jest-fetch-mock'); // eslint-disable-line

const googleResponseGeocode = {
   "results" : [
      {
         "address_components" : [
            { "long_name" : "1600",  "short_name" : "1600", "types" : [ "street_number" ] },
            { "long_name" : "Amphitheatre Pkwy", "short_name" : "Amphitheatre Pkwy", "types" : [ "route" ] },
            { "long_name" : "Mountain View", "short_name" : "Mountain View", "types" : [ "locality", "political" ] },
            { "long_name" : "Santa Clara County", "short_name" : "Santa Clara County", "types" : [ "administrative_area_level_2", "political" ] },
            { "long_name" : "California", "short_name" : "CA", "types" : [ "administrative_area_level_1", "political" ] },
            { "long_name" : "United States", "short_name" : "US", "types" : [ "country", "political" ] },
            { "long_name" : "94043", "short_name" : "94043", "types" : [ "postal_code" ] }
         ],
         "formatted_address" : "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
         "geometry" : {
            "location" : { "lat" : 37.4224764, "lng" : -122.0842499 },
            "location_type" : "ROOFTOP",
            "viewport" : {
               "northeast" : { "lat" : 37.4238253802915, "lng" : -122.0829009197085 },
               "southwest" : { "lat" : 37.4211274197085, "lng" : -122.0855988802915 }
            }
         },
         "place_id" : "ChIJ2eUgeAK6j4ARbn5u_wAGqWA",
         "types" : [ "street_address" ]
      }
   ],
   "status" : "OK"
};

const googleResponseReverseGeocode = {
  "results": [
    {
      "address_components": [
        { "long_name": "277", "short_name": "277", "types": ["street_number"] },
        { "long_name": "Bedford Avenue", "short_name": "Bedford Ave", "types": ["route"] },
        { "long_name": "Williamsburg", "short_name": "Williamsburg", "types": ["neighborhood", "political"] },
        { "long_name": "Brooklyn", "short_name": "Brooklyn", "types": ["political", "sublocality", "sublocality_level_1"] },
        { "long_name": "Kings County", "short_name": "Kings County", "types": ["administrative_area_level_2", "political"] },
        { "long_name": "New York", "short_name": "NY", "types": ["administrative_area_level_1", "political"] },
        { "long_name": "United States", "short_name": "US", "types": [ "country", "political"] },
        { "long_name": "11211", "short_name": "11211", "types": ["postal_code"] }
      ],
      "formatted_address": "277 Bedford Ave, Brooklyn, NY 11211, USA",
      "geometry": {
        "location": { "lat": 40.7142205, "lng": -73.9612903 },
        "location_type": "ROOFTOP",
        "viewport": {
          "northeast": { "lat": 40.71556948029149, "lng": -73.95994131970849 },
          "southwest": { "lat": 40.7128715197085, "lng": -73.9626392802915 }
        }
      },
      "place_id": "ChIJd8BlQ2BZwokRAFUEcm_qrcA",
      "types": ["street_address"]
    },
  ],
  "status": "OK"
};

it('looks up a zip code from lat/lon', async () => {
  fetch.mockResponseOnce(JSON.stringify(googleResponseReverseGeocode));

  const location = new Location();
  const results = await location.zipFromCoordinates(40.714224, -73.961452);

  expect(results).toBe('11211');
});

it('looks up coordinates from a zip code', async () => {
  fetch.mockResponseOnce(JSON.stringify(googleResponseGeocode));

  const location = new Location();
  const results = await location.coordinatesFromZip('12508');

  expect(results).toEqual({ latitude : 37.4224764, longitude : -122.0842499 });
})
