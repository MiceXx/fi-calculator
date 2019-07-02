import { combineReducers } from 'redux';
import compoundCalculator from './compoundCalculator/reducer';
import fireCalculator from './fireCalculator/reducer';
import general from './general/reducer';

const rootReducer = combineReducers({
  general,
  compoundCalculator,
  fireCalculator,
});

export default rootReducer;
