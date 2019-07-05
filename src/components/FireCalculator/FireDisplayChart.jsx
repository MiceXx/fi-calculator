import React from 'react';
import { connect } from 'react-redux';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { makeStyles } from '@material-ui/core/styles';

import {
  Paper,
} from '@material-ui/core';
import { formatCurrency } from '../../utils';
import FireChartStatistics from './FireChartStatistics';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '1em',
    minWidth: '850px',
    padding: '1em',
  },
  tooltip: {
    backgroundColor: '#E2FEE2',
    opacity: 0.7,
    padding: '2px 5px',
    borderRadius: '5px',
  },
  tooltipHeader: {
    fontWeight: 'bold',
    textAlign: 'center',
  }
}));

const FireDisplayChart = (props) => {
  const classes = useStyles();
  const { projection } = props;

  if (projection.length === 0) {
    return <Paper elevation={2} className={classes.root}>Fill in all required fields to see charts</Paper>;
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      const { index, total } = payload[0].payload;
      return (
        <div className={classes.tooltip}>
          <p className={classes.tooltipHeader}>{`Year ${index}`}</p>
          <p>{`Portfolio Value ${formatCurrency(total)}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Paper elevation={2} className={classes.root}>
      <ResponsiveContainer minHeight={200} height={350}>
        <AreaChart
          width={500}
          height={400}
          data={projection}
          margin={{
            top: 10, right: 30, left: 70, bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="index"
            interval={0}
            label={{ value: 'Year', position: 'insideBottom', offset: -10 }} />
          <YAxis
            tickFormatter={(val) => formatCurrency(val)}
            label={{ value: 'Portfolio Value', angle: -90, position: 'insideLeft', offset: -60 }} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#55ffff" />
        </AreaChart>
      </ResponsiveContainer>
      <FireChartStatistics />
    </Paper >
  );
}

const mapStateToProps = ({ fireCalculator }) => {
  return {
    projection: fireCalculator.projection,
  }
}

const mapDispatchToProps = (dispatch) => (
  {
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(FireDisplayChart);