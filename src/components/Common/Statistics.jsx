import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    statistic: {
        textAlign: 'center',
        flexGrow: 1,
    },
    statisticCaption: {
        color: 'grey',
        fontSize: '12px',
    }
}));

const Statistics = (props) => {
    const { title, content } = props;
    const classes = useStyles();
    return (
        <div className={classes.statistic}>
            <Typography className={classes.statisticCaption} >
                {title}
            </Typography>
            <Typography color="primary" variant="h5">
                {content}
            </Typography>
        </div>
    );
}
export default Statistics;