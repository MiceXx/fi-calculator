
import {
    COMPOUND_CALCULATOR_SET_FORM_VALUES,
    COMPOUND_CALCULATOR_COMPUTE_VALUES
} from './actions';

const initialState = {
    form: {
        portfolioValue: '',
        contribution: '',
        growth: '',
    },
    projection: [],
};

export default function compoundCalculator(state = Object.assign({}, initialState), action) {
    switch (action.type) {
        case COMPOUND_CALCULATOR_SET_FORM_VALUES:
            return Object.assign({}, state, { form: action.form });
        case COMPOUND_CALCULATOR_COMPUTE_VALUES:
            return Object.assign({}, state, {
                projection: action.projection,
            });
        default:
            return state;
    }
}