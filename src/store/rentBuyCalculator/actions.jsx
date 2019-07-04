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
                projectionRent.push({
                    index: i,
                    total,
                });
            }
            dispatch({ type: RENTBUY_CALCULATOR_COMPUTE_VALUES_RENT, projectionRent });
        }
    }
}

export function rentBuyCalculatorComputeProjectedBuy(dispatch) {
    return buyForm => {
        const {
            propertyCost,
            maintainanceCost,
            propertyTaxes,
            downPayment,
            mortgageRate,
            amortizationPeriod,
            otherFees,
            appreciation
        } = buyForm;
        if (validate(propertyCost) &&
            validate(maintainanceCost) &&
            validate(propertyTaxes) &&
            validate(downPayment) &&
            validate(mortgageRate) &&
            validate(amortizationPeriod) &&
            validate(otherFees) &&
            validate(appreciation)
        ) {
            const MR = 1 + ((mortgageRate / 100) / MONTHS_PER_YEAR);
            const borrowed = propertyCost + otherFees - downPayment;
            const monthlyMortgage = borrowed * Math.pow(MR, amortizationPeriod) / (Math.pow(MR, amortizationPeriod) - 1);
            const monthlyFee = maintainanceCost + (propertyTaxes / MONTHS_PER_YEAR) + borrowed * monthlyMortgage;
            const projectionBuy = [];
            const AR = appreciation / 100;
            for (let i = 0; i <= PROJECTION_YEARS; i++) {
                const ir = AR + 1;
                const t = i * MONTHS_PER_YEAR;
                const total = propertyCost * Math.pow(ir, t);
                projectionBuy.push({
                    index: i,
                    total,
                });
            }
            const assumedVals = {
                portfolioValue: downPayment,
                buyMonthlyCost: monthlyFee
            }
            dispatch({ type: RENTBUY_CALCULATOR_COMPUTE_VALUES_BUY, projectionBuy, assumedVals });
        }
    }
}
