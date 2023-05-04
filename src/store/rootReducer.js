import { combineReducers } from '@reduxjs/toolkit';
import countReducer from './countSlice';
import todoReducer from './todoSlice';
import usersReducer from './usersSlice';

const rootReducer = combineReducers({
  counter: countReducer,
  todo: todoReducer,
  users: usersReducer,
});

export default rootReducer;
