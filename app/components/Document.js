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
    document: PropTypes.object
  };

  render() {
    // const doc = this.props.document;
    const inlineStyle = {
      marginRight: Spacing.desktopGutter,
      marginBottom: Spacing.desktopGutter
    };

    return (
      <Card className={styles.container} style={inlineStyle}>
        <CardMedia>
          <img src="http://placehold.it/120x120" />
        </CardMedia>
        <CardText>
        Test
        </CardText>
        <CardActions>
          <Label
            label="Label"
            backgroundColor={cyan500}
            hoverColor={cyan400}
          />
        </CardActions>
      </Card>
    );
  }
}
