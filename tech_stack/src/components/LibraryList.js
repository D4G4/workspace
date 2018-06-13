import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
componentWillMount() {
  const dS = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });

  this.dataSource = dS.cloneWithRows(this.props.librariesProp);
}

renderRow(libraryObj) {
  return <ListItem itemObj={libraryObj} />;
}

render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }

}

//Global state object
const mapStateToProps = state =>
  //returned object will show up as props to our component
   ({ librariesProp: state.librariesReducerKey });

export default connect(mapStateToProps)(LibraryList);
