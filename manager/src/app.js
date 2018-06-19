import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

  componentWillMount() {
      firebase.initializeApp({
        apiKey: '--',
        authDomain: '--',
        databaseURL: '--',
        projectId: '--',
        storageBucket: '--',
        messagingSenderId: '--'
      });
    }

  render() {
    //Second Arg: For initial state value
    //Third Arg : Store enhancer
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
