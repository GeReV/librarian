import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-toolbox/lib/button';
import * as DocumentActions from '../actions/documents';

import DocumentGrid from '../components/DocumentGrid.js';

import styles from './DocumentsPage.scss';

function mapStateToProps(state) {
  return {
    documents: state.get('documents').toList()
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DocumentActions, dispatch);
}

class DocumentsPage extends Component {
  static propTypes = {
    style: PropTypes.object,
    documents: PropTypes.object.isRequired,
    fetchDocuments: PropTypes.func.isRequired,
    insertDocument: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchDocuments('/home/amir/Pictures');
  }

  render() {
    return (
      <div className={styles.root}>
        <DocumentGrid {...this.props} />
        <Button icon="add" floating accent onClick={() => this.props.insertDocument('test')} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsPage);
