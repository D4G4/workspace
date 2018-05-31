//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';

//import a custom components
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


console.ignoredYellowBox = ['Remote debugger'];

//Create a component
const Albums = () => (
  <View
  style={{ flex: 1 }}
  >
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//Render it to the device
AppRegistry.registerComponent('albums', () => Albums);
