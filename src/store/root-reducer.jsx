import { combineReducers } from 'redux';
import compoundCalculator from './compoundCalculator/reducer';
import fireCalculator from './fireCalculator/reducer';
import rentBuyCalculator from './rentBuyCalculator/reducer';
import general from './general/reducer';

const rootReducer = combineReducers({
  general,
  compoundCalculator,
  fireCalculator,
  rentBuyCalculator,
});

export default rootReducer;
