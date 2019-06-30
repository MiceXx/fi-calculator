export const FIRE_CALCULATOR_SET_FORM_VALUES = 'FIRE_CALCULATOR_SET_FORM_VALUES';

export function fireCalculatorSetFormValues(dispatch) {
    return form => {
        dispatch({ type: FIRE_CALCULATOR_SET_FORM_VALUES, form });
    }
}