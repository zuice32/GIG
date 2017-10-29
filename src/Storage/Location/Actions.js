export const SYNC_ZIP = 'SYNC_ZIP';
export const SYNC_COORDS = 'SYNC_COORDS';
export const UPDATE_ZIP = 'UPDATE_ZIP';
export const UPDATE_COORDS = 'UPDATE_COORDS';

// Syncs update the redux store and kick off network calls.
// Updates call the sync, but also updates the other and syncs that as well
export const syncZip = zip => ({ type: SYNC_ZIP, zip });
export const syncCoords = coords => ({ type: SYNC_COORDS, coords });
export const updateZip = zip => ({ type: UPDATE_ZIP, zip });
export const updateCoords = coords => ({ type: UPDATE_COORDS, coords });
