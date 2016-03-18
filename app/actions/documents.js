import keyMirror from 'keymirror';

import db from '../store/documentsDatabase';

export const actions = keyMirror({
  FETCH_DOCUMENTS: null,
  FETCH_DOCUMENTS_SUCCESS: null,
  FETCH_DOCUMENTS_FAILED: null,
  DELETE_DOCUMENT: null,
  INSERT_DOCUMENT: null,
  UPDATE_DOCUMENT: null
});

export function fetchRequest(dir) {
  return {
    type: actions.FETCH_DOCUMENTS,
    path: dir
  };
}

export function fetchSuccess(documents) {
  return {
    type: actions.FETCH_DOCUMENTS_SUCCESS,
    documents
  };
}

export function fetchFailed(err) {
  return {
    type: actions.FETCH_DOCUMENTS_FAILED,
    err
  };
}

export function insertDocument(title) {
  return () => {
    db.post({ title });
  };
}

export function fetchDocuments(dir) {
  return dispatch => {
    dispatch(fetchRequest(dir));

    db.allDocs({
      include_docs: true,
      attachments: true
    })
    .then(result => {
      dispatch(fetchSuccess(result));
    })
    .catch(err => {
      dispatch(fetchFailed(err));
    });
  };
}
