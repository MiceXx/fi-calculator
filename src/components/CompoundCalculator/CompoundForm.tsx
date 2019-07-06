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
    compoundCalculatorSetFormValues,
    compoundCalculatorComputeProjected,
} from '../../store/compoundCalculator/actions';
import InfoButton from '../Common/InfoButton';
import theme from '../../theme';
import { Dispatch } from 'redux';
import { GROWTH_OPTIONS } from '../../constants';
import { CompoundFormType } from '../types/CompoundForm';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '1em',
        padding: '1em',
        flexGrow: 1,
        textAlign: 'center',
    },
    formControl: {
        width: 150,
        margin: 'auto',
    },
    field: {
        margin: 'auto',
    },
    fieldWithIcon: {
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
        paddingLeft: '30px',
    }
}));

interface CompoundFormProps {
    form: CompoundFormType,
    action_setFormValues: (a: CompoundFormType) => void,
    action_computeProjected: (a: CompoundFormType) => void,
}

const CompoundForm: React.FC<CompoundFormProps> = (props) => {
    const {
        form,
        action_setFormValues,
        action_computeProjected,
    } = props;
    const classes = useStyles(theme);
    const handleChange = (e:any) => {
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
                    <div className={classes.fieldWithIcon}>
                        <Typography variant="h5" className={classes.field}>
                            Investment Growth Calculator
                    </Typography>
                        <InfoButton text="See how quickly your investments will grow with monthly contributions and the power of compounded returns" />
                    </div>
                </ListItem>
                <ListItem>
                    <TextField
                        className={classes.field}
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
                        className={classes.field}
                        name="contribution"
                        label="Monthly Savings"
                        placeholder="0"
                        value={form.contribution}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>
                        }}
                    />
                </ListItem>
                <ListItem>
                    <div className={classes.fieldWithIcon}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Annual Return</InputLabel>
                            <Select
                                value={form.growth}
                                name="growth"
                                onChange={handleChange}
                            >
                                {GROWTH_OPTIONS.map(v => (
                                    <MenuItem key={v} value={v}>{v}%</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <InfoButton text="The average rate of return on investments. The industry average for a well balanced portfolio is somewhere between 6-7%" />
                    </div>
                </ListItem>
            </List >
        </Paper >
    );
}

const mapStateToProps = ({ compoundCalculator }: { compoundCalculator: any }) => {
    return {
        form: compoundCalculator.form,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => (
    {
        action_setFormValues: compoundCalculatorSetFormValues(dispatch),
        action_computeProjected: compoundCalculatorComputeProjected(dispatch),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(CompoundForm);