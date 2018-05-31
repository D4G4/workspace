import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//make a class component

//Whever you write a class based component, you must define
//exactly one method and that one method is called
// `Render method` requirement -> Returns some amount of JSX
class AlbumList extends Component {
  state = { albums: [] };     //getInitialState();

//Overridden method (Related to Lifecylce)
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));

    //don't:  this.state = { albums : []}
  }

//Return multiple AlbumDetail components...
  renderAlbums() {
    return this.state.albums
    .map(albumObjFromAlbums =>
      <AlbumDetail key={albumObjFromAlbums.title} albumProps={albumObjFromAlbums} />
    );
  }

//Overridden method from Component class
  render() {
    console.log('Inside render');
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
