import React from 'react';
import { View } from 'react-native';

//We'll just use this component to add some styling to the application

const Card = (props) => (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    borderWidth: 5,
    borderRadius: 2,      //cornerRadius
    borderColor: '#800000',   //red
    borderBottomWidth: 0,
    borderTopWidth: 0,
    shadowColor: '#228B22',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.7,   //darkness
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    padding: 10
  }
};

export default Card;
