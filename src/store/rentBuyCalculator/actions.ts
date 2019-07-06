import { BuyFormType, RentFormType } from "../../components/types/RentBuyForm";

export const RENTBUY_CALCULATOR_SET_FORM_VALUES_BUY = 'RENTBUY_CALCULATOR_SET_FORM_VALUES_BUY';
export const RENTBUY_CALCULATOR_SET_FORM_VALUES_RENT = 'RENTBUY_CALCULATOR_SET_FORM_VALUES_RENT';
export const RENTBUY_CALCULATOR_COMPUTE_VALUES_RENT = 'RENTBUY_CALCULATOR_COMPUTE_VALUES_RENT';
export const RENTBUY_CALCULATOR_COMPUTE_VALUES_BUY = 'RENTBUY_CALCULATOR_COMPUTE_VALUES_BUY';

const PROJECTION_YEARS = 40;
const MONTHS_PER_YEAR = 12;

const validate = (val) => val !== '' && !isNaN(val);

export function rentBuyCalculatorSetFormValuesBuy(dispatch) {
    return (buyForm: BuyFormType) => {
        dispatch({ type: RENTBUY_CALCULATOR_SET_FORM_VALUES_BUY, buyForm });
    }
}
export function rentBuyCalculatorSetFormValuesRent(dispatch) {
    return (rentForm: RentFormType) => {
        dispatch({ type: RENTBUY_CALCULATOR_SET_FORM_VALUES_RENT, rentForm });
    }
}

export function rentBuyCalculatorComputeProjectedRent(dispatch) {
    return (rentForm: RentFormType) => {
        const { portfolioValue, contribution, growth, otherRentalFees, monthlyRent } = rentForm;
        if (validate(portfolioValue) &&
            validate(monthlyRent) &&
            validate(otherRentalFees) &&
            validate(contribution) &&
            validate(growth)) {
            const projectionRent = [];
            const realContribution = contribution - monthlyRent - otherRentalFees;
            const rate = growth / 100;
            const ir = rate / MONTHS_PER_YEAR + 1;
            for (let i = 0; i <= PROJECTION_YEARS; i++) {
                const t = i * MONTHS_PER_YEAR;
                const total = portfolioValue * Math.pow(ir, t) + realContribution * ((Math.pow(ir, t) - 1) / (rate / MONTHS_PER_YEAR));
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
    return (buyForm: BuyFormType) => {
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
            const MR = (mortgageRate / 100) / MONTHS_PER_YEAR;
            const borrowed = propertyCost + otherFees - downPayment;
            const n = amortizationPeriod * MONTHS_PER_YEAR;
            const monthlyMortgage = borrowed * Math.pow(1 + MR, n) * MR / (Math.pow(1 + MR, n) - 1);
            const monthlyFee = maintainanceCost + (propertyTaxes / MONTHS_PER_YEAR) + monthlyMortgage;
            const projectionBuy = [];
            const AR = appreciation / 100;
            const ir = AR + 1;
            for (let i = 0; i <= PROJECTION_YEARS; i++) {
                const t = i * MONTHS_PER_YEAR;
                const total = propertyCost * Math.pow(ir, i) - (borrowed * Math.pow(1 + MR, t) - monthlyMortgage * t);
                projectionBuy.push({
                    index: i,
                    total,
                });
            }
            const assumedVals = {
                portfolioValue: downPayment + otherFees,
                buyMonthlyCost: monthlyFee
            }
            dispatch({ type: RENTBUY_CALCULATOR_COMPUTE_VALUES_BUY, projectionBuy, assumedVals });
        }
    }
}
