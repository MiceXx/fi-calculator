import { combineReducers } from 'redux';
import fireCalculator from './fireCalculator/reducer';
import general from './general/reducer';

const rootReducer = combineReducers({
  general,
  fireCalculator,
});

export default rootReducer;
