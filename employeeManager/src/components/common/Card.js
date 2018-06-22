import React from 'react';
import { View } from 'react-native';

//This card will simply display the child components provided to it via props

const Card = (props) => {
  const { cardStyle } = styles;
  return (
    <View style={cardStyle}>{props.children}</View>
  );
};
const styles = {
  cardStyle: {
      backgroundColor: '#F8F8F8',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#B22222',       //Shadow color
      margin: 20,
      padding: 5,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2
  }
};

export { Card };
