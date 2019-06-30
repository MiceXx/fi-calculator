
import {
    GENERAL_SET_CALCULATOR_TYPE
} from './actions';

const initialState = {
    calculatorType: 'FIRE Calculator',
};

export default function generalReducer(state = Object.assign({}, initialState), action) {
    switch (action.type) {
        case GENERAL_SET_CALCULATOR_TYPE:
            return {
                ...state,
                calculatorType: action.calculatorType
            };
        default:
            return state;
    }
}