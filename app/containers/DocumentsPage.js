import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FilesActions from '../actions/files';

import DocumentGrid from '../components/DocumentGrid.js';

import styles from './DocumentsPage.scss';

function mapStateToProps(state) {
  return state.files;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FilesActions, dispatch);
}

class DocumentsPage extends Component {
  static propTypes = {
    style: PropTypes.object,
    files: PropTypes.array.isRequired,
    fetchFiles: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchFiles('/home/amir/Pictures');
  }

  render() {
    return (
      <div className={styles.root}>
        <DocumentGrid {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsPage);
