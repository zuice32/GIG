import * as Actions from './Actions';

it('generates an updateZip action', () => {
  const zip = 'test';
  const correct = { type: Actions.UPDATE_ZIP, zip };

  expect(Actions.updateZip(zip)).toEqual(correct);
});

it('generates an updateCoords action', () => {
  const coords = 'test';
  const correct = { type: Actions.UPDATE_COORDS, coords };

  expect(Actions.updateCoords(coords)).toEqual(correct);
});
