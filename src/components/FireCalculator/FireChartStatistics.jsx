import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    List,
    ListItem,
} from '@material-ui/core';
import Statistics from '../Common/Statistics';

const useStyles = makeStyles(theme => ({
    header: {
        margin: 'auto',
    },
}));

const FireChartStatistics = (props) => {
    const {
        form,
        timeToTarget,
    } = props;
    const classes = useStyles();

    return (
        <Fragment>
            <List>
                <ListItem >
                    <Typography variant="h5" className={classes.header}>
                        Milestones
                    </Typography>
                </ListItem>
                <ListItem>
                    <Statistics title="You will FIRE at age" content={form.age + timeToTarget} />
                </ListItem>

            </List >
        </Fragment >
    );
}

const mapStateToProps = ({ fireCalculator }) => {
    return {
        form: fireCalculator.form,
        timeToTarget: fireCalculator.timeToTarget,
    }
}

export default connect(mapStateToProps, null)(FireChartStatistics);