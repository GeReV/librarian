import fs from 'fs';
// import path from 'path';

import keyMirror from 'keymirror';

export const actions = keyMirror({
  FETCH_FILES: null,
  FETCH_FILES_SUCCESS: null,
  FETCH_FILES_FAILED: null
});

export function fetchRequest(dir) {
  return {
    type: actions.FETCH_FILES,
    path: dir
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
    type: actions.FETCH_FILES_SUCCESS,
    err
  };
}

export function fetchFiles(dir) {
  return dispatch => {
    dispatch(fetchRequest(dir));

    fs.readdir(dir, (err, files) => {
      if (err) {
        dispatch(fetchFailed(err));
      } else {
        dispatch(fetchSuccess(files));
      }
    });
  };
}
