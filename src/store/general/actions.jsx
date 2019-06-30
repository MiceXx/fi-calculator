export const GENERAL_SET_CALCULATOR_TYPE = 'GENERAL_SET_CALCULATOR_TYPE';

export function generalSetCalculatorType(dispatch) {
    return form => {
        dispatch({ type: GENERAL_SET_CALCULATOR_TYPE, form });
    }
}