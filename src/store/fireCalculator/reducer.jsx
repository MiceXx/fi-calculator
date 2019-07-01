
import {
    FIRE_CALCULATOR_SET_FORM_VALUES,
    FIRE_CALCULATOR_COMPUTE_VALUES
} from './actions';

const initialState = {
    form: {
        portfolioValue: 2500,
        monthlySavings: 100,
        growth: 4,
    },
    projection: [],
};

export default function fireCalculatorReducer(state = Object.assign({}, initialState), action) {
    switch (action.type) {
        case FIRE_CALCULATOR_SET_FORM_VALUES:
            return Object.assign({}, state, { form: action.form });
        case FIRE_CALCULATOR_COMPUTE_VALUES:
            return Object.assign({}, state, { projection: action.projection });
        default:
            return state;
    }
}