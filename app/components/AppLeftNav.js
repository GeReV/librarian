import React, { Component } from 'react';
import { Link } from 'react-router';

import {
  Spacing,
  Typography,
} from 'material-ui/lib/styles';
import {cyan500} from 'material-ui/lib/styles/colors';

import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

import styles from './AppLeftNav.css';

export default class AppLeftNav extends Component {

  constructor() {
    super();

    this.styles = {
      logo: {
        cursor: 'pointer',
        fontSize: 24,
        color: Typography.textFullWhite,
        lineHeight: `${Spacing.desktopKeylineIncrement}px`,
        fontWeight: Typography.fontWeightLight,
        backgroundColor: cyan500,
        paddingLeft: Spacing.desktopGutter,
        marginBottom: 8
      }
    };
  }

  render() {
    return (
      <LeftNav className={styles.leftNav} style={{ zIndex: -1 }}>
        <div style={this.styles.logo}>
          Librarian
        </div>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </LeftNav>
    );
  }
}
