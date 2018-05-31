//Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component
const Header = (properties) => {
  //const { textStyle, viewStyle } = styles;
  const { textStyle } = styles;

  //return <Text style={{ fontSize: 50 }}>Albums</Text>;
  return (
    <View style={styles.viewStyle}>
      <Text style={textStyle}>{properties.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//Make the component avaialble to other parts of the app
export default Header;
