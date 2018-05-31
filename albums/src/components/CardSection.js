import React from 'react';
import { View } from 'react-native';

const CardSection = (prop) => (
    <View style={styles.containerStyle}>
      {prop.children}
    </View>
  );

const styles = {
  containerStyle: {
  borderBottomWidth: 1,
  padding: 5,
  backgroundColor: '#fff',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  borderColor: '#ddd',
  position: 'relative',
  flex: 1
  }
};

export default CardSection;
