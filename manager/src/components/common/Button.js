import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//Let's just destructur the poops object here iteself
const Button = ({ onPressedProp, children }) => {
  const { buttonStyle, textStyle } = styles;    //Destructuring
  return (
    <TouchableOpacity onPress={onPressedProp} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    borderColor: '#69AFEEEE',
    borderWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#FF9933',                     // neon orange
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    margin: 10,
    alignSelf: 'stretch'

  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold'
  }
};

//export { Button: Button };
export { Button };   //Because Key and Value are identical
