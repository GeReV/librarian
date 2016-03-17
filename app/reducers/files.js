import { actions } from '../actions/files';

export default function files(state = { files: [] }, action) {
  switch (action.type) {
    case actions.FETCH_FILES_SUCCESS:
      return Object.assign({}, state, {
        files: action.files.filter(name => /\.jpe?g/i.test(name))
      });
    case actions.FETCH_FILES_FAILED:
      return state;
    default:
      return state;
  }
}
