import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FilesActions from '../actions/files';

import { Spacing } from 'material-ui/lib/styles';

import DocumentGrid from '../components/DocumentGrid.js';

import styles from './DocumentsPage.css';

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
  }

  render() {
    const containerStyle = {
      padding: Spacing.desktopGutter
    };

    return (
      <div className={styles.container} style={containerStyle}>
        <DocumentGrid {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsPage);
