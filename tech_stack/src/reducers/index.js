/*
We'll usually have multiple custom reducers in our project,
so to make all these different reducers to play nicely together we use combinedReducers function.
*/

import { combinedReducers } from 'redux';

export default combinedReducers({
  librariesReducer: () => []
});
