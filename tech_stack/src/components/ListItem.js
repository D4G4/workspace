import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    const { titleStlye } = styles;

    return (
      <CardSection>
        <Text style={titleStlye}>
          {this.props.itemObj.title}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStlye: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
