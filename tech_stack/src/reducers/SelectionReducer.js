export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state; //it will return whatever it returned the last time it ran.
  }
};
