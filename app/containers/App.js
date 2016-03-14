import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';

import AppLeftNav from '../components/AppLeftNav.js';

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

    const styles = {
      content: {
        paddingLeft: 256
      }
    };

    return (
      <div>
        <AppBar
          title="Librarian"
          showMenuIconButton={false}
          style={{ zIndex: 0 }}
          zDepth={0}
        />
        <AppLeftNav />
        <div style={styles.content}>
          {this.props.children}
        </div>
        {devTools}
      </div>
    );
  }
}
