import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {

  state = { isUserLoggedIn: null };

  componentWillMount() {
    console.log('Component will mount');
    firebase.initializeApp({
      apiKey: 'AIzaSyDChN1qVKxrKEDTCc6tEN0mXjApNIke4z8',
      authDomain: 'myreactauth.firebaseapp.com',
      databaseURL: 'https://myreactauth.firebaseio.com',
      projectId: 'myreactauth',
      storageBucket: '',
      messagingSenderId: '940414921293'
    });

    //An event handler for Firebase Authentication status
    //The `user` object will be null/undefined whenever the user signs out.
    firebase.auth().onAuthStateChanged((user) => {
      console.log('Inside onAuthStateChanged ');
        if (user) {
          console.log('User is not null');
          this.setState({ isUserLoggedIn: true });
        } else {
          console.log('User is null');
          this.setState({ isUserLoggedIn: false });
        }
        //try user.isNull or user.typeOf
    });
  }

  renderContent() {
    console.log('inside renderContent()');
    switch (this.state.isUserLoggedIn) {
      case true:
        return <Button onPressedProp={() => firebase.auth().signOut()}> Log Out </Button>;
      case false:
      return <LoginForm />;
      default:
        return <Spinner />;

    }
  }

  //@Override
  render() {
    console.log('Inside render method');
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }//end of render()
}

export default App;
