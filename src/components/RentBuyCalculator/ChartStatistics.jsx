import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    List,
    ListItem,
} from '@material-ui/core';
import { formatCurrency } from '../../utils';
import {
    compoundCalculatorSetFormValues,
    compoundCalculatorComputeProjected,
} from '../../store/compoundCalculator/actions';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '1em',
        padding: '1em',
    },
    header: {
        margin: 'auto',
    },
    statistic: {
        textAlign: 'center',
        flexGrow: 1,
    },
    statisticCaption: {
        color: 'grey',
        fontSize: '12px',
    }
}));

const Calc1 = (props) => {
    const {
        projection,
    } = props;
    const classes = useStyles();

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
        <Fragment>
            <List>
                <ListItem >
                    <Typography variant="h5" className={classes.header}>
                        Milestones
                    </Typography>
                </ListItem>
                {projection.length > 40 ? <ListItem>
                    {Statistic('10 Year Value', formatCurrency(projection[10].total))}
                    {Statistic('20 Year Value', formatCurrency(projection[20].total))}
                    {Statistic('30 Year Value', formatCurrency(projection[30].total))}
                    {Statistic('40 Year Value', formatCurrency(projection[40].total))}
                </ListItem> : null}
            </List >
        </Fragment >
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
        action_setFormValues: compoundCalculatorSetFormValues(dispatch),
        action_computeProjected: compoundCalculatorComputeProjected(dispatch),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Calc1);