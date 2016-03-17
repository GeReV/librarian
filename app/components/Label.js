import React, { Component, PropTypes } from 'react';

import styles from './Label.scss';

export default class Label extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    hoverColor: PropTypes.string
  };

  constructor() {
    super();

    this.state = {
      hover: false
    };
  }

  mouseEnter() {
    this.setState({
      hover: true
    });
  }

  mouseLeave() {
    this.setState({
      hover: false
    });
  }

  render() {
    // const {
    //   label
    // } = this.props;

    // const labelStyle = {

      // maxWidth: this.state.hover ? 120 : 0,
      // transition: this.state.hover ? this.transitionOn : this.transitionOff
    // };

    // return (
    //   // <Button
    //   //   flat
    //   //   label={label}
    //   //   className={styles.root}
    //   //   onMouseEnter={this.mouseEnter.bind(this)}
    //   //   onMouseLeave={this.mouseLeave.bind(this)}
    //   // />
    // );

    return <div></div>;
  }
}
