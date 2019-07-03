export const RENTBUY_CALCULATOR_SET_FORM_VALUES = 'RENTBUY_CALCULATOR_SET_FORM_VALUES';
export const RENTBUY_CALCULATOR_COMPUTE_VALUES_RENT = 'RENTBUY_CALCULATOR_COMPUTE_VALUES_RENT';
export const RENTBUY_CALCULATOR_COMPUTE_VALUES_BUY = 'RENTBUY_CALCULATOR_COMPUTE_VALUES_BUY';

const PROJECTION_YEARS = 40;
const MONTHS_PER_YEAR = 12;

const validate = (val) => val !== '' && !isNaN(val);

export function rentBuyCalculatorSetFormValues(dispatch) {
    return form => {
        dispatch({ type: RENTBUY_CALCULATOR_SET_FORM_VALUES, form });
    }
}

export function rentBuyCalculatorComputeProjectedRent(dispatch) {
    return rentForm => {
        const { portfolioValue, contribution, growth } = rentForm;
        if (validate(portfolioValue) &&
            validate(contribution) &&
            validate(growth)) {
            const projectionRent = [];
            for (let i = 0; i <= PROJECTION_YEARS; i++) {
                const rate = growth / 100;
                const ir = rate / MONTHS_PER_YEAR + 1;
                const t = i * MONTHS_PER_YEAR;
                const total = portfolioValue * Math.pow(ir, t) + contribution * ((Math.pow(ir, t) - 1) / (rate / MONTHS_PER_YEAR));
                const contributed = portfolioValue + contribution * t;
                const interestEarned = total - contributed;
                projectionRent.push({
                    index: i,
                    total,
                    contributed,
                    interestEarned,
                });
            }
            dispatch({ type: RENTBUY_CALCULATOR_COMPUTE_VALUES_RENT, projectionRent });
        }
    }
}

export function rentBuyCalculatorComputeProjectedBuy(dispatch) {
    return buyForm => {
        const { propertyCost, maintainanceCost, propertyTaxes, downPayment, mortgageRate, otherFees, appreciation } = buyForm;
        if (validate(propertyCost) &&
            validate(maintainanceCost) &&
            validate(propertyTaxes) &&
            validate(downPayment) &&
            validate(mortgageRate) &&
            validate(otherFees) &&
            validate(appreciation)
        ) {
            const MR = mortgageRate / 100;
            const AR = appreciation / 100;
            const borrowed = propertyCost + otherFees - downPayment;
            const monthlyFee = maintainanceCost +(propertyTaxes / MONTHS_PER_YEAR) + borrowed * (MR / MONTHS_PER_YEAR);
            const projectionBuy = [];
            const rate = growth / 100;
            for (let i = 0; i <= PROJECTION_YEARS; i++) {
                const ir = rate / MONTHS_PER_YEAR + 1;
                const t = i * MONTHS_PER_YEAR;
                const total = contribution * ((Math.pow(ir, t) - 1) / (rate / MONTHS_PER_YEAR));
                projectionBuy.push({
                    index: i,
                    total,
                });
            }
            dispatch({ type: RENTBUY_CALCULATOR_COMPUTE_VALUES_BUY, projectionBuy });
        }
    }
}
