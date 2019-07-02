import React from 'react';

import { Grid } from '@material-ui/core';

import RentBuyForm from './RentBuyForm.jsx';
import DisplayChart from './DisplayChart.jsx';

const RentBuyCalculator = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <RentBuyForm />
            </Grid>
            <Grid item xs={12}>
                <DisplayChart />
            </Grid>
        </Grid>
    );
}

export default RentBuyCalculator;