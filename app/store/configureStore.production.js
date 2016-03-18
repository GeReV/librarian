import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import pouchMiddleware from 'pouch-redux-middleware';
import rootReducer from '../reducers';

import db from './documentsDatabase';

import { actions } from '../actions/documents';

const router = routerMiddleware(hashHistory);

const enhancer = applyMiddleware(thunk, router);

export default function configureStore(initialState) {
  const pouch = pouchMiddleware({
    path: '/documents',
    db,
    actions: {
      remove: doc => store.dispatch({ type: actions.DELETE_DOCUMENT, id: doc._id }),
      insert: doc => store.dispatch({ type: actions.INSERT_DOCUMENT, document: doc }),
      update: doc => store.dispatch({ type: actions.UPDATE_DOCUMENT, document: doc }),
    }
  });

  const createStoreWithPouch = applyMiddleware(pouch)(createStore);

  const store = createStoreWithPouch(rootReducer, initialState, enhancer);

  return store;
}
