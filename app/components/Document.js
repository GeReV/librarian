import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import { Card, CardMedia, CardText, CardActions } from 'react-toolbox/lib/card';

import Label from './Label.js';

import styles from './Document.scss';

export default class Document extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    className: PropTypes.string,
    selected: PropTypes.bool,
    labels: PropTypes.array,
    onTouchTap: PropTypes.func
  };

  documentLabels(labels) {
    const documentLabels = labels.map(label =>
      <Label label={label} />
    );

    if (documentLabels.length) {
      return (
        <CardActions>{documentLabels}</CardActions>
      );
    }
  }

  render() {
    const {
      image,
      title,
      selected,
      className,
      ...restProps
    } = this.props;

    const labels = [];

    const newClassName = cx(styles.root, className, {
      [styles.selected]: selected
    });

    return (
      <Card className={newClassName} raised={selected} {...restProps}>
        <CardMedia
          aspectRatio="square"
          image={image || 'http://placehold.it/120x120'}
        />
      <CardText className={styles.title} title={title}>{title}</CardText>
        {this.documentLabels(labels)}
      </Card>
    );
  }
}
