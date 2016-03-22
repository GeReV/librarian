import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import ToolboxApp from 'react-toolbox/lib/app';
import AppBar from 'react-toolbox/lib/app_bar';

import AppLeftNav from '../components/AppLeftNav.js';
import ImportDocuments from '../components/ImportDocuments.js';

import styles from './App.scss';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  constructor() {
    super();

    this.state = {
      withImport: false
    };
  }

  render() {
    const devTools = (() => {
      if (process.env.NODE_ENV !== 'production') {
        const DevTools = require('./DevTools');
        return <DevTools />;
      }
    })();

    const className = cx(styles.root, {
      [styles['with-import']]: this.state.withImport
    });

    return (
      <ToolboxApp>
        <div
          className={className}
          onClick={() => this.setState({ withImport: !this.state.withImport })}
        >
          <AppBar fixed flat>
            <h5>Librarian</h5>
          </AppBar>
          <AppLeftNav className={styles.navigation} />
          <div className={styles.content}>
            {this.props.children}
          </div>
          <ImportDocuments className={styles.import} />
          {devTools}
        </div>
      </ToolboxApp>
    );
  }
}
