import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Calc1 from './Calc1.jsx';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

const FireCalculator = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
    };

    const isActive = true;

    return (
        <Calc1 />
    );
}

export default FireCalculator;