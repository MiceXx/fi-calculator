import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    List,
    ListItem,
} from '@material-ui/core';
import {
    fireCalculatorSetFormValues,
    fireCalculatorComputeProjected,
} from '../../store/fireCalculator/actions';

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
        form,
        timeToTarget,
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
                <ListItem>
                    {Statistic('You will FIRE at age', form.age + timeToTarget)}
                </ListItem>

            </List >
        </Fragment >
    );
}

const mapStateToProps = ({ fireCalculator }) => {
    return {
        form: fireCalculator.form,
        projection: fireCalculator.projection,
        timeToTarget: fireCalculator.timeToTarget,
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        action_setFormValues: fireCalculatorSetFormValues(dispatch),
        action_computeProjected: fireCalculatorComputeProjected(dispatch),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Calc1);