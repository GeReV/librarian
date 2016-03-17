import React, { Component, PropTypes } from 'react';

import Document from './Document.js';

import styles from './DocumentGrid.scss';

export default class DocumentGrid extends Component {
  static propTypes = {
    files: PropTypes.array
  };

  render() {
    const documents = this.props.files || [];

    return (
      <div className={styles.root}>
        {
          documents.map(doc => <Document key={`doc-${doc}`} document={doc} />)
        }
      </div>
    );
  }
}
