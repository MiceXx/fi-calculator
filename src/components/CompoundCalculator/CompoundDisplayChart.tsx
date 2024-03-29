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
import CompoundChartStatistics from './CompoundChartStatistics';
import theme from '../../theme';

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

interface CompoundDisplayChartProps {
  projection: Array<any>
}

const CompoundDisplayChart: React.FC<CompoundDisplayChartProps> = (props) => {
  const classes = useStyles(theme);
  const { projection } = props;

  if (projection.length === 0) {
    return <Paper elevation={2} className={classes.root}>Fill in all required fields to see charts</Paper>;
  }

  const CustomTooltip = (props: any) => {
    const { active, payload } = props;
    if (active) {
      const { index, total, contributed, interestEarned } = payload[0].payload;
      return (
        <div className={classes.tooltip}>
          <p className={classes.tooltipHeader}>{`Year ${index}`}</p>
          <p>{`Total Contribution ${formatCurrency(contributed)}`}</p>
          <p>{`Total Interest Earned ${formatCurrency(interestEarned)}`}</p>
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
          <Area type="monotone" dataKey="contributed" stroke="#FDA50F" fill="#FDA50F" />
        </AreaChart>
      </ResponsiveContainer>
      <CompoundChartStatistics />
    </Paper >
  );
}

const mapStateToProps = ({ compoundCalculator }: { compoundCalculator: any }) => {
  return {
    projection: compoundCalculator.projection,
  }
}

export default connect(mapStateToProps, null)(CompoundDisplayChart);