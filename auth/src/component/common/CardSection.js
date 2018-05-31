import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  <View style={styles.cardItem}>{props.children}</View>
);

const styles = {
  cardItem: {
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
