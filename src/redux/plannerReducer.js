import { combineReducers } from 'redux';
import { Type } from './plannerActions';

const badgetReducer = (state = 0, action) => {
  switch (action.type) {
    case Type.ADD_BUDGET:
      return state + action.payload;
    default:
      return state;
  }
};

const expenseReducer = (state = 0, action) => {
  switch (action.type) {
    case Type.ADD_EXPENSE:
      return state;

    case Type.REMOVE_EXPENSE:
      return state;

    default:
      return state;
  }
};

export default combineReducers({
  badget: badgetReducer,
  expense: expenseReducer,
});
