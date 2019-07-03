import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    List,
    ListItem,
} from '@material-ui/core';
import { formatCurrency } from '../../utils';
import Statistics from '../Common/Statistics';

const useStyles = makeStyles(theme => ({
    header: {
        margin: 'auto',
    },
}));

const CompoundChartStatistics = (props) => {
    const {
        projection,
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
                {projection.length > 40 ? <ListItem>
                    <Statistics title="10 Year Value" content={formatCurrency(projection[10].total)} />
                    <Statistics title="20 Year Value" content={formatCurrency(projection[20].total)} />
                    <Statistics title="30 Year Value" content={formatCurrency(projection[30].total)} />
                    <Statistics title="40 Year Value" content={formatCurrency(projection[40].total)} />
                </ListItem> : null}
            </List >
        </Fragment >
    );
}

const mapStateToProps = ({ compoundCalculator }) => {
    return {
        projection: compoundCalculator.projection,
    }
}

export default connect(mapStateToProps, null)(CompoundChartStatistics);