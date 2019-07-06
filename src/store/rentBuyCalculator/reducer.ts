
import {
    RENTBUY_CALCULATOR_SET_FORM_VALUES_BUY,
    RENTBUY_CALCULATOR_SET_FORM_VALUES_RENT,
    RENTBUY_CALCULATOR_COMPUTE_VALUES_RENT,
    RENTBUY_CALCULATOR_COMPUTE_VALUES_BUY,
} from './actions';

const initialState = {
    rentForm: {
        portfolioValue: null as string | null,
        monthlyRent: null as string | null,
        otherRentalFees: null as string | null,
        contribution: null as string | null,
        growth: null as string | null,
    },
    buyForm: {
        propertyCost: null as string | null,
        maintainanceCost: null as string | null,
        propertyTaxes: null as string | null,
        downPayment: null as string | null,
        mortgageRate: null as string | null,
        amortizationPeriod: 25,
        otherFees: null as string | null,
        appreciation: null as string | null,
    },
    assumedVals: {
        portfolioValue: null as string | null,
        buyMonthlyCost: null as string | null,
    },
    projectionRent: [],
    projectionBuy: [],
};

export default function rentBuyCalculator(state = Object.assign({}, initialState), action) {
    switch (action.type) {
        case RENTBUY_CALCULATOR_SET_FORM_VALUES_BUY:
            return Object.assign({}, state, { buyForm: action.buyForm });
        case RENTBUY_CALCULATOR_SET_FORM_VALUES_RENT:
            return Object.assign({}, state, { rentForm: action.rentForm });
        case RENTBUY_CALCULATOR_COMPUTE_VALUES_RENT:
            return Object.assign({}, state, {
                projectionRent: action.projectionRent,
            });
        case RENTBUY_CALCULATOR_COMPUTE_VALUES_BUY:
            return Object.assign({}, state, {
                projectionBuy: action.projectionBuy,
                assumedVals: action.assumedVals,
            });
        default:
            return state;
    }
}