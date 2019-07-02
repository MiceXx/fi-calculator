import React from 'react';

import { Grid } from '@material-ui/core';

import CompoundForm from './CompoundForm.jsx';
import DisplayChart from './DisplayChart.jsx';

const FireCalculator = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <CompoundForm />
            </Grid>
            <Grid item xs={12}>
                <DisplayChart />
            </Grid>
        </Grid>
    );
}

export default FireCalculator;