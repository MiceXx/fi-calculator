import React, { useEffect, useState, Fragment } from 'react';
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
    FormControlLabel,
    Checkbox,
} from '@material-ui/core';
import {
    rentBuyCalculatorSetFormValuesRent,
    rentBuyCalculatorComputeProjectedRent,
} from '../../store/rentBuyCalculator/actions';
import { formatCurrency } from '../../utils';
import InfoButton from '../Common/InfoButton';
import Statistics from '../Common/Statistics';
import theme from '../../theme';
import { Dispatch } from 'redux';

import { RentFormType, AssumedValsType } from '../types/RentBuyForm';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '1em',
        padding: '1em',
        flexGrow: 1,
        textAlign: 'center',
    },
    formControl: {
        width: 150,
        margin: 'auto',
    },
    field: {
        margin: 'auto',
    },
    fieldWithIcon: {
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
        paddingLeft: '30px',
    }
}));

const GROWTH_OPTIONS = [2, 3, 4, 5, 6, 7, 8, 9, 10];

interface RentFormProps {
    rentForm: RentFormType,
    assumedVals: AssumedValsType,
    action_setFormValues: (a: RentFormType) => void,
    action_computeProjected: (a: RentFormType) => void,
}

const RentForm: React.FC<RentFormProps> = (props) => {
    const {
        rentForm,
        assumedVals,
        action_setFormValues,
        action_computeProjected,
    } = props;
    const [investTheRest, setInvestTheRest] = useState(true);
    const classes = useStyles(theme);
    const handleChange = (e:any) => {
        const name = e.target.name;
        const value = e.target.value;
        if (isNaN(value)) return;
        action_setFormValues({
            ...rentForm,
            [name]: value ? parseInt(value, 10) : 0
        });
    }

    useEffect(() => {
        action_computeProjected(rentForm);
    }, [action_computeProjected, rentForm]);

    useEffect(() => {
        if (investTheRest) {
            if (assumedVals.portfolioValue && assumedVals.buyMonthlyCost) {
                action_setFormValues({
                    ...rentForm,
                    portfolioValue: assumedVals.portfolioValue,
                    contribution: assumedVals.buyMonthlyCost,
                });
            }
        }
    }, [action_setFormValues, investTheRest, assumedVals.portfolioValue, assumedVals.buyMonthlyCost, rentForm]);

    return (
        <Paper elevation={4} className={classes.root}>
            <List>
                <ListItem>
                    <Typography variant="h5" className={classes.field}>
                        Rental Costs
                    </Typography>
                </ListItem>
                <ListItem>
                    <TextField
                        className={classes.field}
                        name="monthlyRent"
                        label="Monthly Rent"
                        placeholder="0"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>
                        }}
                        value={rentForm.monthlyRent}
                        onChange={handleChange}
                    />
                </ListItem>
                <ListItem>
                    <div className={classes.fieldWithIcon}>
                        <TextField
                            className={classes.field}
                            name="otherRentalFees"
                            label="Other Rental Fees"
                            placeholder="0"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>
                            }}
                            value={rentForm.otherRentalFees}
                            onChange={handleChange}
                        />
                        <InfoButton text="Other fees associated to renting, including: Hydro, heating, and renter's insurance" />
                    </div>
                </ListItem>
                <ListItem>
                    <div className={classes.fieldWithIcon}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Annual Return</InputLabel>
                            <Select
                                value={rentForm.growth}
                                name="growth"
                                onChange={handleChange}
                            >
                                {GROWTH_OPTIONS.map(v => (
                                    <MenuItem key={v} value={v}>{v}%</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <InfoButton text="The average rate of return on investments. The industry average for a well balanced portfolio is somewhere between 6-7%" />
                    </div>
                </ListItem>
                <ListItem>
                    <FormControlLabel
                        className={classes.field}
                        control={
                            <Checkbox
                                checked={investTheRest}
                                onChange={() => setInvestTheRest(!investTheRest)}
                                color="primary"
                            />
                        }
                        label="Invest the difference"
                    />
                </ListItem>
                {!investTheRest ?
                    <Fragment>
                        <ListItem>
                            <TextField
                                className={classes.field}
                                name="portfolioValue"
                                label="Cash on hand"
                                placeholder="0"
                                value={rentForm.portfolioValue}
                                onChange={handleChange}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                                }}
                            />
                        </ListItem>
                        <ListItem>
                            <TextField
                                className={classes.field}
                                name="contribution"
                                label="Monthly Savings"
                                placeholder="0"
                                value={rentForm.contribution}
                                onChange={handleChange}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                                }}
                            />
                        </ListItem>
                    </Fragment> :
                    <Fragment>
                        {assumedVals.portfolioValue && <Statistics title="Cash on hand" content={formatCurrency(assumedVals.portfolioValue)} />}
                        {assumedVals.buyMonthlyCost && <Statistics title="Monthly Savings" content={formatCurrency(assumedVals.buyMonthlyCost)} />}
                    </Fragment>}
            </List >
        </Paper >
    );
}

const mapStateToProps = ({ rentBuyCalculator }:{ rentBuyCalculator: any }) => {
    return {
        rentForm: rentBuyCalculator.rentForm,
        assumedVals: rentBuyCalculator.assumedVals,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => (
    {
        action_setFormValues: rentBuyCalculatorSetFormValuesRent(dispatch),
        action_computeProjected: rentBuyCalculatorComputeProjectedRent(dispatch),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(RentForm);