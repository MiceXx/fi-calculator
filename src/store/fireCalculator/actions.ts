import { Dispatch } from "redux";
import { FireFormType } from "../../components/types/FireForm";

export const FIRE_CALCULATOR_SET_FORM_VALUES = 'FIRE_CALCULATOR_SET_FORM_VALUES';
export const FIRE_CALCULATOR_COMPUTE_VALUES = 'FIRE_CALCULATOR_COMPUTE_VALUES';

const PROJECTION_YEARS = 40;
const MONTHS_PER_YEAR = 12;

export function fireCalculatorSetFormValues(dispatch: Dispatch) {
    return (form: FireFormType) => {
        dispatch({ type: FIRE_CALCULATOR_SET_FORM_VALUES, form });
    }
}

export function fireCalculatorComputeProjected(dispatch: Dispatch) {
    const validate = (val) => val !== '' && !isNaN(val);
    return (form: FireFormType) => {
        const { age, contribution, growth, target } = form;
        if (validate(age) &&
            validate(contribution) &&
            validate(growth) &&
            validate(target)) {
            const projection = [];
            const rate = growth / 100;
            let timeToTarget = Math.log(1 + (target * (rate / MONTHS_PER_YEAR)) / contribution) / Math.log(1 + (rate / MONTHS_PER_YEAR));
            timeToTarget = Math.round(timeToTarget / 12);
            for (let i = 0; i <= PROJECTION_YEARS; i++) {
                const ir = rate / MONTHS_PER_YEAR + 1;
                const t = i * MONTHS_PER_YEAR;
                const total = contribution * ((Math.pow(ir, t) - 1) / (rate / MONTHS_PER_YEAR));
                projection.push({
                    index: i + age,
                    total,
                });
            }
            dispatch({ type: FIRE_CALCULATOR_COMPUTE_VALUES, projection, timeToTarget });
        }
    }
}
