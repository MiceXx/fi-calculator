export type RentFormType = {
    portfolioValue: number | null,
    monthlyRent: number | null,
    otherRentalFees: number | null,
    contribution: number | null,
    growth: number | null,
}

export type BuyFormType = {
    propertyCost: number | null,
    maintainanceCost: number | null,
    propertyTaxes: number | null,
    downPayment: number | null,
    mortgageRate: number | null,
    amortizationPeriod: number,
    otherFees: number | null,
    appreciation: number | null,
}

export type AssumedValsType = {
    portfolioValue: number | null,
    buyMonthlyCost: number | null,
}