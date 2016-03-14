import React, { Component, PropTypes } from 'react';

import { Spacing } from 'material-ui/lib/styles';

import DocumentGrid from '../components/DocumentGrid.js';

import styles from './DocumentsPage.css';

export default class DocumentsPage extends Component {
  static propTypes = {
    style: PropTypes.object
  };

  render() {
    const containerStyle = {
      padding: Spacing.desktopGutter
    };

    return (
      <div className={styles.container} style={containerStyle}>
        <DocumentGrid />
      </div>
    );
  }
}
