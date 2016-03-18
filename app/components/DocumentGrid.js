import React, { Component, PropTypes } from 'react';

import Document from './Document.js';

import styles from './DocumentGrid.scss';

export default class DocumentGrid extends Component {
  static propTypes = {
    documents: PropTypes.object
  };

  render() {
    const documents = this.props.documents || [];

    return (
      <div className={styles.root}>
        {
          documents.map(doc => <Document key={`doc-${doc.get('_id')}`} document={doc} />)
        }
      </div>
    );
  }
}
