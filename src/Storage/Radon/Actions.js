export const UPDATE_RADON_DATA = 'UPDATE_RADON_DATA';
export const UPDATE_RADON_COMPLETE = 'UPDATE_RADON_COMPLETE';

export const updateRadonData = newData => ({
  type: UPDATE_RADON_COMPLETE,
  newData,
});
