import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGGING_USER_IN
 } from './types';

//Action creator must return an action i.e. an object
export const actEmailChanged = (email) => ({
      type: EMAIL_CHANGED,
      payload: email
});

export const actPasswordChanged = (password) => ({
    type: PASSWORD_CHANGED,
    payload: password
});

/*
That's how it will work
 -> Action creator called
 -> Action creator returns a function (arrow function in this case)
 -> ReduxThunk sees that we returned a function instead of an action (object)
      and calls (that function) it with dispatch
 -> Then we do our login request
 -> wait
 -> wait
 -> Request complete, user logged in
 -> .then() runs
 -> inside that (.then()) we will MANUALLY dispatch (store.dispatch()) our action

 So by getting access to that dispatch argument, we can call dispatch at any point of time.
*/
export const actLoginUser = ({ email, password }) =>
  //returning a funciton instead of action(object)
  (dispatch) => {
      dispatch({ type: LOGGING_USER_IN });
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(error => {
          console.log(error);
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFailed(dispatch));
          });
  };

//This will dispatch the action to our reducer
const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user
  });

  //Rather than navigating directly to EmployeeList, we will navigate to main()
  //Actions.employeeList();
  Actions.main();     //This is a key of a scene inside your Router.js
};

const loginUserFailed = (dispatch) => {
  dispatch({
    type: LOGIN_FAILED
  });
};
