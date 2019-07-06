import { Dispatch } from "redux";
import { CompoundFormType } from "../../components/types/CompoundForm";

export const COMPOUND_CALCULATOR_SET_FORM_VALUES = 'COMPOUND_CALCULATOR_SET_FORM_VALUES';
export const COMPOUND_CALCULATOR_COMPUTE_VALUES = 'COMPOUND_CALCULATOR_COMPUTE_VALUES';

const PROJECTION_YEARS = 40;
const MONTHS_PER_YEAR = 12;

export function compoundCalculatorSetFormValues(dispatch: Dispatch) {
    return (form: CompoundFormType) => {
        dispatch({ type: COMPOUND_CALCULATOR_SET_FORM_VALUES, form });
    }
}

export function compoundCalculatorComputeProjected(dispatch: Dispatch) {
    const validate = (val: any) => val && !isNaN(val);
    return (form: CompoundFormType) => {
        const { portfolioValue, contribution, growth } = form;
        if (validate(portfolioValue) &&
            validate(contribution) &&
            validate(growth)) {
            const projection = [];
            for (let i = 0; i <= PROJECTION_YEARS; i++) {
                const rate = growth / 100;
                const ir = rate / MONTHS_PER_YEAR + 1;
                const t = i * MONTHS_PER_YEAR;
                const total = portfolioValue * Math.pow(ir, t) + contribution * ((Math.pow(ir, t) - 1) / (rate / MONTHS_PER_YEAR));
                const contributed = portfolioValue + contribution * t;
                const interestEarned = total - contributed;
                projection.push({
                    index: i,
                    total,
                    contributed,
                    interestEarned,
                });
            }
            dispatch({ type: COMPOUND_CALCULATOR_COMPUTE_VALUES, projection });
        }
    }
}
