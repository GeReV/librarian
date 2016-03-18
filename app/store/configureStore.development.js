import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import pouchMiddleware from 'pouch-redux-middleware';
import createLogger from 'redux-logger';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

import db from './documentsDatabase';

import { actions } from '../actions/documents';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const router = routerMiddleware(hashHistory);

const enhancer = compose(
  applyMiddleware(thunk, router, logger),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
);

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

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
