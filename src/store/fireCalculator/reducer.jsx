
import {
    FIRE_CALCULATOR_SET_FORM_VALUES,
    FIRE_CALCULATOR_COMPUTE_VALUES
} from './actions';

const initialState = {
    form: {
        age: '',
        contribution: '',
        target: '',
        growth:'',
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