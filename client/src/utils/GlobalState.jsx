import { configureStore } from '@reduxjs/toolkit';
import { reducer as globalReducer } from './reducers'; // Import the reducer from reducers.js

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

export default store;