import React, { Component, PropTypes } from 'react';

import Document from './Document.js';

import styles from './DocumentGrid.css';

export default class DocumentGrid extends Component {
  static propTypes = {
    documents: PropTypes.array
  };

  render() {
    const documents = this.props.documents || '1234567890'.split('').map(i => ({ id: i }));

    return (
      <div className={styles.container}>
        {
          documents.map(doc => <Document key={doc.id} document={doc} />)
        }
      </div>
    );
  }
}
