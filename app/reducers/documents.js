import Immutable from 'immutable';

import { actions } from '../actions/documents';

const initialState = Immutable.fromJS({});

export default function documents(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_DOCUMENTS_SUCCESS:
      return Immutable.Map(action.documents.rows.map(row => [row.id, Immutable.fromJS(row.doc)]));
    case actions.FETCH_DOCUMENTS_FAILED:
      return state;
    case actions.INSERT_DOCUMENT:
      return state.update(action.document._id, () => Immutable.fromJS(action.document));
    default:
      return state;
  }
}
