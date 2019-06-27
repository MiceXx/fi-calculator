import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    FormControl,
    Paper,
    InputLabel,
    Input,
    Typography,
    InputAdornment,
    List,
    ListItem,
    Select,
    MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '1em',
        padding: '1em',
    },
    formControl: {
        minWidth: 120,
    },
}));

const Calc1 = () => {
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
        <Paper elevation={isActive ? 16 : 2} className={classes.root}>
            <List>
                <ListItem>
                    <Typography variant="h5">
                        Calc 1
                    </Typography>
                </ListItem>
                <ListItem>
                    <TextField
                        label="Portfolio Value"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>
                        }}
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        label="Monthly Savings"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>
                        }}
                    />
                </ListItem>
                <ListItem>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-simple">Growth</InputLabel>
                        <Select
                            value={values.age}
                            onChange={handleChange}
                            inputProps={{ name: 'age' }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </ListItem>
                <ListItem>
                    <div>
                        <Typography variant="caption">
                            TOTAL_MORTGAGE_PAYMENT
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="caption">
                            TOTAL_MORTGAGE_PAYMENT2
                        </Typography>
                    </div>
                </ListItem>
            </List >
        </Paper >
    );
}

export default Calc1;