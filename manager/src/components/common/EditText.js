import React from 'react';
import { TextInput, View, Text } from 'react-native';

const EditText = ({ labelText, onChangeText, value, placeholder, isSecureTextEntry }) => (
    <View style={styles.containerStyle}>
      <Text
      style={styles.labelStyle}
      >{labelText}
      </Text>

      <TextInput
        secureTextEntry={isSecureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={styles.inputStyle}
        onChangeText={onChangeText}
        value={value}
      />

    </View>
  );

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,      //Space b/w each line of text
    flex: 2,
    borderBottomWidth: 1,
    borderColor: '#bbbbbb'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { EditText };
