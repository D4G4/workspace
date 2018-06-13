import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

//Our state object will have a key of libraries
//and value of the list of libraries is produces by our LibraryReducer.
export default combineReducers({
  librariesReducerKey: LibraryReducer,
  selectedLibIdKey: SelectionReducer
});
