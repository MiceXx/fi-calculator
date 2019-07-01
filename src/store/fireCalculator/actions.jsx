export const FIRE_CALCULATOR_SET_FORM_VALUES = 'FIRE_CALCULATOR_SET_FORM_VALUES';
export const FIRE_CALCULATOR_COMPUTE_VALUES = 'FIRE_CALCULATOR_COMPUTE_VALUES';

const PROJECTION_YEARS = 40;
const MONTHS_PER_YEAR = 12;

export function fireCalculatorSetFormValues(dispatch) {
    return form => {
        dispatch({ type: FIRE_CALCULATOR_SET_FORM_VALUES, form });
    }
}

export function fireCalculatorComputeProjected(dispatch) {
    return form => {
        const { portfolioValue, monthlySavings, growth } = form;
        if (portfolioValue && monthlySavings && growth) {
            const projection = [];
            for (let i = 0; i <= PROJECTION_YEARS; i++) {
                const rate = growth / 100;
                const ir = rate / MONTHS_PER_YEAR + 1;
                const t = i * MONTHS_PER_YEAR;
                const total = portfolioValue * Math.pow(ir, t) + monthlySavings * ((Math.pow(ir, t) - 1) / (rate / MONTHS_PER_YEAR)) * ir;
                const contributed = portfolioValue + monthlySavings * t;
                const interestEarned = total - contributed;
                projection.push({
                    index: i,
                    total,
                    contributed,
                    interestEarned,
                });
            }
            dispatch({ type: FIRE_CALCULATOR_COMPUTE_VALUES, projection });
        }
    }
}
