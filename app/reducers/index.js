import { combineReducers } from 'redux-immutable';
import routing from './routing';
import documents from './documents';

const rootReducer = combineReducers({
  documents,
  routing
});

export default rootReducer;
