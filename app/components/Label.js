import React, { Component, PropTypes } from 'react';

import { Transitions } from 'material-ui/lib/styles';

import FlatButton from 'material-ui/lib/flat-button';


export default class Label extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    hoverColor: PropTypes.string.isRequired
  };

  constructor() {
    super();

    this.state = {
      hover: false
    };

    this.transitionOn = Transitions.create(
      null,
      'max-width',
      '500ms',
      Transitions.easeInOutFunction
    );
    this.transitionOff = Transitions.create(null, 'max-width', null, Transitions.easeInOutFunction);
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
    const {
      label,
      backgroundColor,
      hoverColor
    } = this.props;

    const style = {
      lineHeight: '20px',
      minWidth: 20,
      paddingLeft: 8,
      paddingRight: 8
    };

    const labelStyle = {
      display: 'block',
      paddingLeft: 0,
      paddingRight: 0,
      fontSize: 12,
      overflow: 'hidden',
      maxWidth: this.state.hover ? 120 : 0,
      transition: this.state.hover ? this.transitionOn : this.transitionOff
    };

    return (
      <FlatButton
        label={label}
        backgroundColor={backgroundColor}
        hoverColor={hoverColor}
        rippleColor="#fff"
        style={style}
        labelStyle={labelStyle}
        onMouseEnter={this.mouseEnter.bind(this)}
        onMouseLeave={this.mouseLeave.bind(this)}
      />
    );
  }
}
