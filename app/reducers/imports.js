import { join } from 'path';
import Immutable from 'immutable';

import { process } from 'remote';

import { actions } from '../actions/files';

const defaultPath = (process.platform === 'win32') ?
  join(process.env.USERPROFILE, 'Documents') :
  join(process.env.HOME, 'Pictures');

const initialState = Immutable.fromJS({
  path: defaultPath,
  files: []
});

export default function imports(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_FILES:
      return state
        .set('path', action.path)
        .set('files', Immutable.List());
    case actions.FETCH_FILES_SUCCESS:
      return state.set('files', Immutable.List(action.files));
    case actions.FETCH_FILES_FAILED:
    default:
      return state;
  }
}
