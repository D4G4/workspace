import React from 'react';
import { TextInput, View, Text } from 'react-native';

const EditText = ({
                    label,
                    onChangeText,
                    value,
                    placeholder,
                    isSecureTextEntry,
                    keyboardType,
                    maxLength
                  }) => (
    <View style={styles.containerStyle}>
      <Text
      style={styles.labelStyle}
      >{label}
      </Text>

      <TextInput
        secureTextEntry={isSecureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={styles.inputStyle}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        value={value}
        maxLength={maxLength}
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
    borderBottomWidth: 0,
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
