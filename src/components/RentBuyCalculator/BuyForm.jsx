import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    FormControl,
    Paper,
    InputLabel,
    Typography,
    InputAdornment,
    List,
    ListItem,
    Select,
    MenuItem,
} from '@material-ui/core';
import {
    rentBuyCalculatorSetFormValuesBuy,
    rentBuyCalculatorComputeProjectedBuy,
} from '../../store/rentBuyCalculator/actions';
import InfoButton from '../Common/InfoButton';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '1em',
        padding: '1em',
        flexGrow: 1,
        textAlign: 'center',
    },
    formControl: {
        width: 180,
        margin: 'auto',
    },
    formControlAmortization: {
        width: 150,
    },
    field: {
        margin: 'auto',
    },
    fieldWithIcon: {
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
    }
}));

const HOME_GROWTH_OPTIONS = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const AMORTIZATION_OPTIONS = [];
for (let i = 1; i <= 30; i++) {
    AMORTIZATION_OPTIONS.push(i);
}

const BuyForm = (props) => {
    const {
        buyForm,
        action_setFormValues,
        action_computeProjected,
    } = props;
    const classes = useStyles();
    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        if (isNaN(value)) return;
        action_setFormValues({
            ...buyForm,
            [name]: value ? parseInt(value, 10) : 0
        });
    }

    useEffect(() => {
        action_computeProjected(buyForm);
    }, [action_computeProjected, buyForm]);

    return (
        <Paper elevation={4} className={classes.root}>
            <List>
                <ListItem>
                    <div className={classes.fieldWithIcon}>
                        <Typography variant="h5" >
                            Buy Info
                        </Typography>
                        <InfoButton text="Details of the house you are looking to purchase" />
                    </div>
                </ListItem>
                <ListItem>
                    <TextField
                        className={classes.field}
                        name="propertyCost"
                        label="Property Cost"
                        placeholder="0"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>
                        }}
                        value={buyForm.propertyCost}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.field}
                        name="propertyTaxes"
                        label="Property Taxes (annual)"
                        placeholder="0"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>
                        }}
                        value={buyForm.propertyTaxes}
                        onChange={handleChange}
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        className={classes.field}
                        name="downPayment"
                        label="Down payment"
                        placeholder="0"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>
                        }}
                        value={buyForm.downPayment}
                        onChange={handleChange}
                    />
                    <div className={classes.fieldWithIcon}>
                        <TextField
                            className={classes.field}
                            name="maintainanceCost"
                            label="Maintainance Costs"
                            placeholder="0"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>
                            }}
                            value={buyForm.maintainanceCost}
                            onChange={handleChange}
                        />
                        <InfoButton text="Total monthly maintainance and upkeep costs" />
                    </div>
                </ListItem>
                <ListItem>
                    <TextField
                        className={classes.field}
                        name="mortgageRate"
                        label="Mortgage Rate"
                        placeholder="0"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">%</InputAdornment>
                        }}
                        value={buyForm.mortgageRate}
                        onChange={handleChange}
                    />
                    <div className={classes.fieldWithIcon}>
                        <FormControl className={classes.formControlAmortization}>
                            <InputLabel>Amortization Period</InputLabel>
                            <Select
                                value={buyForm.amortizationPeriod}
                                name="amortizationPeriod"
                                onChange={handleChange}
                            >
                                {AMORTIZATION_OPTIONS.map(v => (
                                    <MenuItem key={v} value={v} name={v}>{v} years</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <InfoButton text="Mortgage amount is assumed to be (Property value + Fees) - Down Payment" />
                    </div>
                </ListItem>
                <ListItem>
                    <div className={classes.fieldWithIcon}>
                        <TextField
                            className={classes.field}
                            name="otherFees"
                            label="Other Fixed Fees"
                            placeholder="0"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>
                            }}
                            value={buyForm.otherFees}
                            onChange={handleChange}
                        />
                        <InfoButton text="Includes: Legal fees, Home inspection fees, Appraisal fees, Provincial/Municipal taxes, Insurance. A good estimate is around $5000 + 1% of property value" />
                    </div>
                    <div className={classes.fieldWithIcon}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Appreciation</InputLabel>
                            <Select
                                value={buyForm.appreciation}
                                name="appreciation"
                                onChange={handleChange}
                            >
                                {HOME_GROWTH_OPTIONS.map(v => (
                                    <MenuItem key={v} value={v} name={v}>{v}%</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <InfoButton text="Estimated appreciation of property. This value varies wildly depending on your geographic location. The average growth rate across the US over the last 40 years has been between 5% to 6%" />
                    </div>
                </ListItem>
            </List >
        </Paper >
    );
}

const mapStateToProps = ({ rentBuyCalculator }) => {
    return {
        buyForm: rentBuyCalculator.buyForm,
        projection: rentBuyCalculator.projection,
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        action_setFormValues: rentBuyCalculatorSetFormValuesBuy(dispatch),
        action_computeProjected: rentBuyCalculatorComputeProjectedBuy(dispatch),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(BuyForm);