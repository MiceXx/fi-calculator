import { combineReducers } from 'redux';
import compoundCalculator from './compoundCalculator/reducer';
import fireCalculator from './fireCalculator/reducer';
import rentBuyCalculator from './rentBuyCalculator/reducer';

const rootReducer = combineReducers({
  compoundCalculator,
  fireCalculator,
  rentBuyCalculator,
});

export default rootReducer;
