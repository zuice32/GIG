export const UPDATE_ZIP = 'UPDATE_ZIP';
export const UPDATE_COORDS = 'UPDATE_COORDS';

export const updateZip = zip => ({ type: UPDATE_ZIP, zip });
export const updateCoords = coords => ({ type: UPDATE_COORDS, coords });
