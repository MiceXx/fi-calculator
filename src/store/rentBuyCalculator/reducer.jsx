
import {
    RENTBUY_CALCULATOR_SET_FORM_VALUES,
    RENTBUY_CALCULATOR_COMPUTE_VALUES_RENT,
    RENTBUY_CALCULATOR_COMPUTE_VALUES_BUY,
} from './actions';

const initialState = {
    rentForm: {
        portfolioValue: '',
        monthlyRent: '',
        otherRentalFees: '',
        contribution: '',
        growth: '',
    },
    buyForm: {
        propertyCost: '',
        maintainanceCost: '',
        propertyTaxes: '',
        downPayment: '',
        mortgageRate: '',
        amortizationPeriod: '',
        otherFees: '',
        appreciation: '',
    },
    assumedVals: {
        portfolioValue: '',
        buyMonthlyCost: '',
    },
    projectionRent: [],
    projectionBuy: [],
};

export default function rentBuyCalculator(state = Object.assign({}, initialState), action) {
    switch (action.type) {
        case RENTBUY_CALCULATOR_SET_FORM_VALUES:
            return Object.assign({}, state, { form: action.form });
        case RENTBUY_CALCULATOR_COMPUTE_VALUES_RENT:
            return Object.assign({}, state, {
                projectionRent: action.projectionRent,
            });
        case RENTBUY_CALCULATOR_COMPUTE_VALUES_BUY:
            return Object.assign({}, state, {
                projectionBuy: action.projectionBuy,
            });
        default:
            return state;
    }
}