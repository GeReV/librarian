import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cx from 'classnames';
import { basename } from 'path';

import { Button, IconButton } from 'react-toolbox/lib/button';
import Navigation from 'react-toolbox/lib/navigation';

import FlexGrid from './FlexGrid.js';
import Document from './Document.js';
import MakeMultiSelectable from './MakeMultiSelectable.js';

import * as FileActions from '../actions/files';

import styles from './ImportDocuments.scss';

const MultiSelectableFlexGrid = MakeMultiSelectable(FlexGrid);

function mapStateToProps(state) {
  return {
    path: state.getIn(['imports', 'path']),
    files: state.getIn(['imports', 'files'])
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FileActions, dispatch);
}

class ImportDocuments extends Component {
  static propTypes = {
    className: PropTypes.string,
    path: PropTypes.string.isRequired,
    files: PropTypes.object.isRequired,
    fetchFiles: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchFiles(this.props.path);
  }

  handleClose(e) {
    e.stopPropagation();

    this.props.onClose();
  }

  render() {
    const {
      files,
      path
    } = this.props;

    const className = cx(this.props.className, styles.root);

    const cards = files.map(file =>
      <Document
        key={`import-${file}`}
        image={`file://${file}`}
        title={basename(file)}
      />
    );

    return (
      <div className={className}>
        <Navigation className={styles.toolbar} type="horizontal">
          <div className={styles.buttons}>
            <Button accent label="Import" />
          </div>
          <IconButton
            className={styles.close}
            icon="close"
            flat
            onTouchTap={this.handleClose.bind(this)}
          />
        </Navigation>
        <MultiSelectableFlexGrid>
          {cards}
        </MultiSelectableFlexGrid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImportDocuments);
