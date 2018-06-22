//NOTE: Reducers returs the state to component
/** Authentication
1. Going to handle email and password that can be entered
2. Decides whether to show the loader or not
3. Decides the error message
NOTE Whatever value we returned from this reducer will end up as your application state
*/

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGGING_USER_IN
} from '../actions/types';

const INITIAL_STATE = {
  emailStateKeyFromReducer: 'dakshg18@gmail.com',
  passwordStateKeyFromReducer: 'admin@123',
  user: null, //not being used anywhere till yet
  errorStateKeyFromReducer: '',
  loadingStateKeyFromReducer: false
};

export default (state = INITIAL_STATE, action) => {
  console.log('Inside AuthReducer');
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, emailStateKeyFromReducer: action.payload };   // *1
    case PASSWORD_CHANGED:
      return { ...state, passwordStateKeyFromReducer: action.payload };
    case LOGGING_USER_IN:
        return { ...state,
          loadingStateKeyFromReducer: true,
          errorStateKeyFromReducer: '' };
    case LOGIN_SUCCESS:
    /*
      return { ...state,
        user: action.payload,
        errorStateKeyFromReducer: '',
        loadingStateKeyFromReducer: false,
        //Because we don't want to save it in reducer (not in app's storage)
        emailStateKeyFromReducer: '',
        passwordStateKeyFromReducer: '' };
        */
    return {
      //...state,
      ...INITIAL_STATE,
      user: action.payload
    };
    case LOGIN_FAILED:
      //return { ...state, error: 'Authentication faliure. ', passwordStateKeyFromReducer: '' };
      return { ...state,
        errorStateKeyFromReducer: 'Authentication faliure. ',
        loadingStateKeyFromReducer: false,
        passwordStateKeyFromReducer: '' };
    default:
      return state;
  }
};

/*
*1 :
make a new object, take all the properties from state and then define
the property email and toss it on top of whatever properties are on that state object
So if state already has an email proprty, it will be overwritten by the new one on top here.

*/
