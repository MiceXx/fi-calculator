import React from 'react';

import { Grid } from '@material-ui/core';

import CompoundForm from './CompoundForm';
import CompoundDisplayChart from './CompoundDisplayChart';

const FireCalculator = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <CompoundForm />
            </Grid>
            <Grid item xs={12}>
                <CompoundDisplayChart />
            </Grid>
        </Grid>
    );
}

export default FireCalculator;