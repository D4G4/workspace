import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

//not defining a function, simply exporting it
export default (state = INITIAL_STATE, action) => {
  console.log('inside EmployeeFormReducer');
  console.log('Action.type = ', action.type, ' Action.payload = ', action.payload);
    switch (action.type) {
      default:
        return state;
      case EMPLOYEE_UPDATE:
      //Square braces are not an array, it means 'KeyInterpolation'
      //This key will be determined at runtime
      /* TODO:  Do it Without ES6
      const newState = {};
      newState[action.payload.key] = action.payload.value
      return { ...sate, ...newState};
      */
        return { ...state, [action.payload.key]: action.payload.value };
      case EMPLOYEE_CREATE:
        return INITIAL_STATE;
    }
};
