import React, { Component } from 'react';

import styles from './FlexGrid.scss';

export default class FlexGrid extends Component {
  render() {
    return (
      <div className={styles.root}>
        {this.props.children}
      </div>
    );
  }
}
