import React from 'react';

import { Grid } from '@material-ui/core';

import CompoundForm from './FireForm';
import FireDisplayChart from './FireDisplayChart';

const FireCalculator = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <CompoundForm />
            </Grid>
            <Grid item xs={12}>
                <FireDisplayChart />
            </Grid>
        </Grid>
    );
}

export default FireCalculator;