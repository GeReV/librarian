import React, { Component, PropTypes } from 'react';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardMedia from 'material-ui/lib/card/card-media';
import CardText from 'material-ui/lib/card/card-text';

import Label from './Label.js';

import { Spacing } from 'material-ui/lib/styles';
import { cyan500, cyan400 } from 'material-ui/lib/styles/colors';


import styles from './Document.css';

export default class Document extends Component {
  static propTypes = {
    document: PropTypes.string.isRequired
  };

  documentLabels(labels) {
    const documentLabels = labels.map(label =>
      <Label
        label={label}
        backgroundColor={cyan500}
        hoverColor={cyan400}
      />
    );

    if (documentLabels.length) {
      return (
        <CardActions>{documentLabels}</CardActions>
      );
    }
  }

  render() {
    const inlineStyle = {
      marginRight: Spacing.desktopGutter,
      marginBottom: Spacing.desktopGutter
    };

    const labels = [];

    return (
      <Card className={styles.container} style={inlineStyle}>
        <CardMedia>
          <img src="http://placehold.it/120x120" />
        </CardMedia>
        <CardText>{this.props.document}</CardText>
        {this.documentLabels(labels)}
      </Card>
    );
  }
}
