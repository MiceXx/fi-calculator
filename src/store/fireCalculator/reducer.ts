
import {
    FIRE_CALCULATOR_SET_FORM_VALUES,
    FIRE_CALCULATOR_COMPUTE_VALUES
} from './actions';

const initialState = {
    form: {
        age: null as string | null,
        contribution: null as string | null,
        target: null as string | null,
        growth:null as string | null,
    },
    projection: [],
    timeToTarget: -1,
};

export default function compoundCalculator(state = Object.assign({}, initialState), action) {
    switch (action.type) {
        case FIRE_CALCULATOR_SET_FORM_VALUES:
            return Object.assign({}, state, { form: action.form });
        case FIRE_CALCULATOR_COMPUTE_VALUES:
            return Object.assign({}, state, {
                projection: action.projection,
                timeToTarget: action.timeToTarget
            });
        default:
            return state;
    }
}