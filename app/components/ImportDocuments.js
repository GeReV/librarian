import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import DocumentGrid from './DocumentGrid.js';
import { Button, IconButton } from 'react-toolbox/lib/button';
import Navigation from 'react-toolbox/lib/navigation';

import styles from './ImportDocuments.scss';

export default class ImportDocuments extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  render() {
    const className = cx(this.props.className, styles.root);
    return (
      <div className={className}>
        <Navigation className={styles.toolbar} type="horizontal">
          <div className={styles.buttons}>
            <Button accent label="Import" />
          </div>
          <IconButton className={styles.close} flat icon="close" />
        </Navigation>
        <DocumentGrid />
      </div>
    );
  }
}
