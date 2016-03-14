import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import DocumentsPage from './containers/DocumentsPage';
import CounterPage from './containers/CounterPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={DocumentsPage} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
