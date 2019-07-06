import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
} from '@material-ui/core';
import theme from '../../theme';

const useStyles = makeStyles(() => ({
    statistic: {
        textAlign: 'center',
        flexGrow: 1,
    },
    statisticCaption: {
        color: 'grey',
        fontSize: '12px',
    }
}));

interface StatisticsProps {
    title: string,
    content: string | number | null,
}

const Statistics: React.FC<StatisticsProps> = (props) => {
    const { title, content } = props;
    const classes = useStyles(theme);
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