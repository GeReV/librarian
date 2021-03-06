import remote from 'remote';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';

import usbDetect from 'usb-detection';

import 'react-toolbox/components/commons.scss';
import './app.global.scss';

import injectTapEventPlugin from 'react-tap-event-plugin';

const win = remote.getCurrentWindow();

win.on('close', () => {
  usbDetect.stopMonitoring();
});

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: state => state.get('routing')
});

injectTapEventPlugin();

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  // Use require because imports can't be conditional.
  // In production, you should ensure process.env.NODE_ENV
  // is envified so that Uglify can eliminate this
  // module and its dependencies as dead code.
  // require('./createDevToolsWindow')(store);
}
