import React from 'react';
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
                            <MenuItem value={4}>4%</MenuItem>
                            <MenuItem value={5}>5%</MenuItem>
                            <MenuItem value={6}>6%</MenuItem>
                            <MenuItem value={7}>7%</MenuItem>
                            <MenuItem value={8}>8%</MenuItem>
                            <MenuItem value={9}>9%</MenuItem>
                            <MenuItem value={10}>10%</MenuItem>
                        </Select>
                    </FormControl>
                </ListItem>
                <ListItem>
                    <div>
                        <Typography variant="caption">
                            10 Year Portfolio Value
                        </Typography>
                        <Typography color="primary" variant="h5">{1234}</Typography>
                    </div>
                    <div>
                        <Typography variant="caption">
                            20 Year Portfolio Value
                        </Typography>
                        <Typography color="primary" variant="h5">{1234}</Typography>
                    </div>
                </ListItem>
            </List >
        </Paper >
    );
}

export default Calc1;