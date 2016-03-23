import { normalize, join } from 'path';
import glob from 'glob';

import keyMirror from 'keymirror';

export const actions = keyMirror({
  FETCH_FILES: null,
  FETCH_FILES_SUCCESS: null,
  FETCH_FILES_FAILED: null
});

export function fetchRequest(path) {
  return {
    type: actions.FETCH_FILES,
    path
  };
}

export function fetchSuccess(files) {
  return {
    type: actions.FETCH_FILES_SUCCESS,
    files
  };
}

export function fetchFailed(err) {
  return {
    type: actions.FETCH_FILES_FAILED,
    err
  };
}

export function fetchFiles(path) {
  return dispatch => {
    dispatch(fetchRequest(path));

    glob(join(normalize(path), '/**/*.{jpeg,jpg,bmp,tga,tiff,png,gif}'), (err, files) => {
      if (err) {
        dispatch(fetchFailed(err));
      } else {
        dispatch(fetchSuccess(files));
      }
    });
  };
}
