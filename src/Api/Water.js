export function currentDataForLocation(coords) {
  const date = new Date();
  const year = date.getFullYear() - 1;
  return dataForLocationByYear(coords, year);
}

export function dataForLocationByYear(coords, year) {
  return fetch(`http://ra-svc.azurewebsites.net/api/water?latitude=${coords.latitude}&longitude=${coords.longitude}&year=${year}`)
    .then(response => response.text())
    .then(text => {
      const parsed = JSON.parse(text);
      return parsed;
    });
}
