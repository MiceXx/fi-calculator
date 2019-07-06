import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    List,
    ListItem,
} from '@material-ui/core';
import Statistics from '../Common/Statistics';
import theme from '../../theme';
import { FireFormType } from '../types/FireForm';

const useStyles = makeStyles(theme => ({
    header: {
        margin: 'auto',
    },
}));

interface FireChartStatisticsProps {
    form: FireFormType,
    timeToTarget: number,
}

const FireChartStatistics: React.FC<FireChartStatisticsProps> = (props) => {
    const {
        form,
        timeToTarget,
    } = props;
    const classes = useStyles(theme);

    return (
        <Fragment>
            <List>
                <ListItem >
                    <Typography variant="h5" className={classes.header}>
                        Milestones
                    </Typography>
                </ListItem>
                <ListItem>
                    {form.age && <Statistics title="You will FIRE at age" content={form.age + timeToTarget} />}
                </ListItem>

            </List >
        </Fragment >
    );
}

const mapStateToProps = ({ fireCalculator }: { fireCalculator: any }) => {
    return {
        form: fireCalculator.form,
        timeToTarget: fireCalculator.timeToTarget,
    }
}

export default connect(mapStateToProps, null)(FireChartStatistics);