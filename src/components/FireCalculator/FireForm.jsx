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
import {
    fireCalculatorSetFormValues,
    fireCalculatorComputeProjected,
} from '../../store/fireCalculator/actions';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '1em',
        padding: '1em',
        flexGrow: 1,
        textAlign: 'center',
    },
    formControl: {
        width: 180,
        margin: 'auto',
    },
    field: {
        margin: 'auto',
    },
}));

const AGE_OPTIONS = [];
for (let i = 10; i <= 70; i++) AGE_OPTIONS.push(i);
const GROWTH_OPTIONS = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const FireForm = (props) => {
    const {
        form,
        action_setFormValues,
        action_computeProjected,
    } = props;
    const classes = useStyles();
    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        if (isNaN(value)) return;
        action_setFormValues({
            ...form,
            [name]: value ? parseInt(value, 10) : 0
        });
    }

    useEffect(() => {
        action_computeProjected(form);
    }, [action_computeProjected, form]);

    return (
        <Paper elevation={4} className={classes.root}>
            <List>
                <ListItem>
                    <Typography variant="h5" className={classes.field}>
                        FIRE Calculator
                    </Typography>
                </ListItem>
                <ListItem>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Age</InputLabel>
                        <Select
                            value={form.age}
                            name="age"
                            onChange={handleChange}
                        >
                            {AGE_OPTIONS.map(v => (
                                <MenuItem key={v} value={v} name={v}>{v}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </ListItem>
                <ListItem>
                    <TextField
                        className={classes.field}
                        name="contribution"
                        label="Monthly Contributions"
                        placeholder="0"
                        value={form.contribution}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>
                        }}
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        className={classes.field}
                        name="target"
                        label="FIRE Target"
                        placeholder="0"
                        value={form.target}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>
                        }}
                    />
                </ListItem>
                <ListItem>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Annual Growth Rate</InputLabel>
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
        action_computeProjected: fireCalculatorComputeProjected(dispatch),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(FireForm);