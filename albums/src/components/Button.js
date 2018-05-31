import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPressedProp, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPressedProp} style={buttonStyle} >
      <Text style={textStyle} >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#fff',
    borderWidth: 5,
    borderRadius: 15,
    borderColor: '#007aff'
            //position itslef
  },

  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default Button;
