//http://data.pa.gov/resource/7ypj-ezu6.json?$select=address_postal_code,%20date_extract_y(test_end_date)%20as%20year,%20avg(measure_value)%20as%20avg,%20count(radon_test_result_identifier)%20as%20tests&$where=address_postal_code=%2717036%27%20AND%20year=%272017%27&$order=year&$group=address_postal_code,%20year

export function currentDataForLocation(zip) {
  const date = new Date();
  const year = date.getFullYear() - 1;
  return dataForLocationByYear(zip, year);
}

export function dataForLocationByYear(zip, year) {
  return fetch(`https://ra-svc.azurewebsites.net/api/radon/${zip}~${year}`)
    .then(response => response.text())
    .then(text => {
      const parsed = JSON.parse(text);
      return parsed;
    });
}
