import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import styles from './AppLeftNav.scss';

export default class AppLeftNav extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  render() {
    const className = cx(this.props.className, styles.root);

    return (
      <aside className={className}>
        <p>Test</p>
      </aside>
    );
  }
}
