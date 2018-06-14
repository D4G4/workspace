import React, { Component } from 'react';
import { Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillMount() {
    console.log('componment will mount');
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
    // LayoutAnimation.configureNext({
    //   duration: 300,
    //   create: {
    //     type: LayoutAnimation.Types.easeInEaseOut,
    //     property: LayoutAnimation.Properties.opacity,
    //   },
    //   update: { type: LayoutAnimation.Types.easeInEaseOut },
    // });
  }

  renderDescription() {
    const { itemObj, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{itemObj.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    console.log('Inside renderMethod of ListItem ');
    const { titleStlye } = styles;
    const { id, title } = this.props.itemObj;

    return (
      <TouchableWithoutFeedback
      //action is provided into props via mapStateToProps()
        onPress={() => this.props.selectedLibraryAction(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStlye}>
              {title}
            </Text>
          </CardSection>
            {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStlye: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibIdKey === ownProps.itemObj.id;
  //return { expanded: expanded };
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
