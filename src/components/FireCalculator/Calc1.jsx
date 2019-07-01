/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
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
import { formatCurrency } from '../../utils';
import {
    fireCalculatorSetFormValues,
    fireCalculatorComputeProjected,
} from '../../store/fireCalculator/actions';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '1em',
        padding: '1em',
    },
    formControl: {
        minWidth: 120,
    },
    statistic: {
        marginRight: '2em',
    },
    statisticCaption: {
        color: 'grey',
        fontSize: '12px',
    }
}));

const GROWTH_OPTIONS = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const Calc1 = (props) => {
    const {
        form,
        projection,
        action_setFormValues,
    } = props;
    const classes = useStyles();
    const isActive = true;
    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        if (isNaN(value)) return;
        action_setFormValues({
            ...form,
            [name]: value
        })
    }

    useEffect(() => {
        props.action_computeProjected(form);
    }, [form]);

    const Statistic = (title, content) => (
        <div className={classes.statistic}>
            <Typography className={classes.statisticCaption} >
                {title}
            </Typography>
            <Typography color="primary" variant="h5">
                {content}
            </Typography>
        </div>
    )

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
                        name="portfolioValue"
                        label="Portfolio Value"
                        placeholder="0"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>
                        }}
                        value={form.portfolioValue}
                        onChange={handleChange}
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        name="monthlySavings"
                        label="Monthly Savings"
                        placeholder="0"
                        value={form.monthlySavings}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>
                        }}
                    />
                </ListItem>
                <ListItem>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-simple">Growth</InputLabel>
                        <Select
                            value={form.growth}
                            name="growth"
                            onChange={handleChange}
                        >
                            {GROWTH_OPTIONS.map(v => (
                                <MenuItem key={v} value={v} name={v}>{v}%</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </ListItem>
                {projection.length > 20 ? <ListItem>
                    {Statistic('10 Year Value', formatCurrency(projection[10].total))}
                    {Statistic('20 Year Value', formatCurrency(projection[20].total))}
                </ListItem> : null}
                {projection.length > 40 ? <ListItem>
                    {Statistic('30 Year Value', formatCurrency(projection[30].total))}
                    {Statistic('40 Year Value', formatCurrency(projection[40].total))}
                </ListItem> : null}

            </List >
        </Paper >
    );
}

const mapStateToProps = ({ fireCalculator }) => {
    return {
        form: fireCalculator.form,
        projection: fireCalculator.projection,
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        action_setFormValues: fireCalculatorSetFormValues(dispatch),
        action_computeProjected: fireCalculatorComputeProjected(dispatch),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Calc1);