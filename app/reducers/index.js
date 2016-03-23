import { combineReducers } from 'redux-immutable';
import routing from './routing';
import documents from './documents';
import imports from './imports';

const rootReducer = combineReducers({
  documents,
  routing,
  imports
});

export default rootReducer;
