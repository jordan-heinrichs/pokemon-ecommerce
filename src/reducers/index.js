// src/reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import libraryReducer from './library';

const rootReducer = combineReducers({
  library: libraryReducer,
});

export default rootReducer;
