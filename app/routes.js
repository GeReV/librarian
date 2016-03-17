import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import DocumentsPage from './containers/DocumentsPage.js';
import CounterPage from './containers/CounterPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DocumentsPage} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
