import React, { Component, PropTypes } from 'react';
import ToolboxApp from 'react-toolbox/lib/app';
import AppBar from 'react-toolbox/lib/app_bar';

import AppLeftNav from '../components/AppLeftNav.js';

import styles from './App.scss';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    const devTools = (() => {
      if (process.env.NODE_ENV !== 'production') {
        const DevTools = require('./DevTools');
        return <DevTools />;
      }
    })();

    return (
      <ToolboxApp>
        <div className={styles.root}>
          <AppBar fixed flat>
            <h5>Librarian</h5>
          </AppBar>
          <AppLeftNav />
          <div className={styles.content}>
            {this.props.children}
          </div>
          {devTools}
        </div>
      </ToolboxApp>
    );
  }
}
