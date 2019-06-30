import React from 'react';
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
import { fireCalculatorSetFormValues } from '../../store/fireCalculator/actions';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '1em',
        padding: '1em',
    },
    formControl: {
        minWidth: 120,
    },
    statistic: {
        marginRight: '1em',
    }
}));

const GROWTH_OPTIONS = [4, 5, 6, 7, 8, 9, 10];

const Calc1 = (props) => {
    const {
        form,
        action_setFormValues,
    } = props;
    const classes = useStyles();
    const handleChange = prop => event => {
    };

    const isActive = true;
    const handleClick = (e, v) => {
        console.log(e, v)
        console.log(e.target.value)
        action_setFormValues({
            ...form,

        })
    }

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
                        onChange={handleClick}
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
                            value={form.portfolioValue}
                            onChange={handleChange}
                            inputProps={{ name: 'age' }}
                        >
                            {GROWTH_OPTIONS.map(v => (
                                <MenuItem key={v} value={v}>{v}%</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </ListItem>
                <ListItem>
                    <div className={classes.statistic}>
                        <Typography variant="caption" >
                            10 Year Value
                        </Typography>
                        <Typography color="primary" variant="h5">{1234}</Typography>
                    </div>
                    <div className={classes.statistic}>
                        <Typography variant="caption">
                            20 Year Value
                        </Typography>
                        <Typography color="primary" variant="h5">{1234}</Typography>
                    </div>
                </ListItem>
            </List >
        </Paper >
    );
}

const mapStateToProps = ({ fireCalculator }) => {
    return {
        form: fireCalculator.form,
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        action_setFormValues: fireCalculatorSetFormValues(dispatch),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Calc1);