import React from 'react';
import { View, Text } from 'react-native';

//Create a component
const Header = (props) => (
    <View style={styles.viewStyle}>
      <Text style={{ fontSize: 33, color: '#ffffff' }}>{props.headerText}</Text>
    </View>
);

const styles = {
  viewStyle: {
    backgroundColor: '#69AFEEEE',
    alignItems: 'center',                //Horizontal
    justifyContent: 'center',            //Vertical
    padding: 20,
    position: 'relative',
    shadowColor: '#AFEEEE',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    elevation: 10
  }
};

export { Header };
