import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import RentForm from './RentForm';
import BuyForm from './BuyForm';
import RentBuyDisplayChart from './RentBuyDisplayChart';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

const RentBuyCalculator = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={6} >
                <BuyForm />
            </Grid>
            <Grid item xs={6}>
                <RentForm />
            </Grid>
            <Grid item xs={12}>
                <RentBuyDisplayChart />
            </Grid>
        </Grid>
    );
}

export default RentBuyCalculator;