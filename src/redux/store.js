import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import plannerReducer from './planner/plannerReducer';
import palnnerMiddlewar from './planner/plannerMiddlewar';

const rootReducer = combineReducers({ palenner: plannerReducer });

const enhancer = applyMiddleware(palnnerMiddlewar);

const store = createStore(rootReducer, composeWithDevTools(enhancer));
export default store;
