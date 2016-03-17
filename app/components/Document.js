import React, { Component, PropTypes } from 'react';

import { Card, CardMedia, CardText, CardActions } from 'react-toolbox/lib/card';

import Label from './Label.js';

import styles from './Document.scss';

export default class Document extends Component {
  static propTypes = {
    document: PropTypes.string.isRequired
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
    const labels = [];

    return (
      <Card className={styles.root}>
        <CardMedia
          aspectRatio="square"
          image="http://placehold.it/120x120"
        />
        <CardText>{this.props.document}</CardText>
        {this.documentLabels(labels)}
      </Card>
    );
  }
}
