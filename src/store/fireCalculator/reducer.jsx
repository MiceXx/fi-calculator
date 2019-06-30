
import {
    FIRE_CALCULATOR_SET_FORM_VALUES
} from './actions';

const initialState = {
    form: {
        portfolioValue: 0,
        monthlySavings: 0,
        growth: 5,
    },
};

export default function fireCalculatorReducer(state = Object.assign({}, initialState), action) {
    switch (action.type) {
        case FIRE_CALCULATOR_SET_FORM_VALUES:
            return Object.assign({}, state, { data: action.form });
        default:
            return state;
    }
}