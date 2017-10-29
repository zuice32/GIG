const GOOGLE_API_KEY = 'AIzaSyBgXFtrdWrYy2xLzSMyLRZI0rJ9yBLOdzY';

export const zipFromCoordinates = (latitude, longitude) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`;

  return fetch(url)
    .then(data =>
      data.json().then(realData => {
        const address = realData.results.filter(component => component.types.includes('street_address'))[0].address_components
          .filter(addressComponent => addressComponent.types.includes('postal_code'))[0];

        return address.long_name;
      })
    );
}

export const coordinatesFromZip = (zip) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${GOOGLE_API_KEY}`

  return fetch(url)
    .then(data =>
      data.json().then(realData => {
        const geocoords = realData.results[0].geometry.location;

        return { latitude: geocoords.lat, longitude: geocoords.lng };
      })
    );
}
