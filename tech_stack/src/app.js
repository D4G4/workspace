import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const App = () => {
  return (
    //Created a store and passed it to Provider
    //Created a reducer and passed it to store
    <Provider store={createStore(reducers)}>
      <View />
    </Provider>
  );
};

export default App;
