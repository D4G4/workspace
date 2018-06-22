import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE,
   EMPLOYEE_CREATE,
   EMPLOYEES_FETCH_SUCCESS
  } from './types';

export const employeeUpdateAction = ({ key, value }) => ({
    type: EMPLOYEE_UPDATE,
    payload: { key, value }
});

export const createEmployeeAction = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  console.log(`currentUserId ${currentUser.uid}`);

  const pathToJsonDataSource
    = `/users/${currentUser.uid}/employees`; //The name of path is arbitrary

  //pretend that we are using Redux Thunk, so it will be called with ReduxThunk
  return (dispatch) => {
    firebase.database().ref(pathToJsonDataSource)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.pop();
      });   //Actions.employeeList({ type: 'reset' });
  };
};

/*
This action is persistent
(continuing firmly, continuing to exist or occur over a prolonged preiod of time)
i.e. when we'll first call this action, it will immediately start up this event handler
and for the life of this application,
it will call this federal function ( (objectHoldingData) => {} )
any time the data comes to the bucket.
So it's like Firebase and Redux kinda working together pretty well
*/
export const employeesFetchAction = () => {
  return (dispatch) => {
    const { currentUser } = firebase.auth();
    const pathToJsonDataSource
      = `/users/${currentUser.uid}/employees`;

    /*
    how does .on( 'value' , (objectHoldingData) => {} ) works:
    Any time any 'value' comes from this ref() or this bucket of data
    call that federal function right here with an object holding that data sitting in there
    That objectHoldingData is not the actual data, it is an object that describes the data that
    we could get access to.
    */
    firebase.database().ref(pathToJsonDataSource)
      .on('value', objectHoldingData => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: objectHoldingData.val() });
      });
  };
};
