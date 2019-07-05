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

const RentBuyDisplayChart = (props) => {
  const classes = useStyles();
  const { projectionRent, projectionBuy } = props;

  if (projectionRent.length === 0 && projectionBuy.length === 0) {
    return <Paper elevation={2} className={classes.root}>Fill in all required fields to see charts</Paper>;
  }

  let combinedProjection = [];
  let showBuy = false;
  let showRent = false;
  if (projectionRent.length > projectionBuy.length) {
    showRent = true;
    combinedProjection = projectionRent.map(proj => ({ index: proj.index, rentTotal: proj.total }));
  } else if (projectionBuy.length > projectionRent.length) {
    showBuy = true;
    combinedProjection = projectionBuy.map(proj => ({ index: proj.index, buyTotal: proj.total }));
  } else {
    showRent = true;
    showBuy = true;
    for (let i = 0; i < projectionRent.length; i++) {
      combinedProjection.push({
        index: i,
        rentTotal: projectionRent[i].total,
        buyTotal: projectionBuy[i].total
      })
    }
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      const { index, rentTotal, buyTotal } = payload[0].payload;
      return (
        <div className={classes.tooltip}>
          <p className={classes.tooltipHeader}>{`Year ${index}`}</p>
          {showRent ? <p>{`Net Worth (Rent) ${formatCurrency(rentTotal)}`}</p> : null}
          {showBuy ? <p>{`Net Worth (Buy) ${formatCurrency(buyTotal)}`}</p> : null}
        </div>
      );
    }
    return null;
  };

  return (
    <Paper elevation={2} className={classes.root}>
      <ResponsiveContainer minHeight={200} height={350}>
        {projectionRent ? <AreaChart
          width={500}
          height={400}
          data={combinedProjection}
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
          {showRent ? <Area type="monotone" dataKey="rentTotal" stroke="#8884d8" fill="#55ffff" /> : null}
          {showBuy ? <Area type="monotone" dataKey="buyTotal" stroke="#8884d8" fill="#00ff00" /> : null}
          <Area type="monotone" dataKey="contributed" stroke="#FDA50F" fill="#FDA50F" />
        </AreaChart> : null}
      </ResponsiveContainer>
    </Paper >
  );
}

const mapStateToProps = ({ rentBuyCalculator }) => {
  return {
    projectionRent: rentBuyCalculator.projectionRent,
    projectionBuy: rentBuyCalculator.projectionBuy,
  }
}

const mapDispatchToProps = (dispatch) => (
  {
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(RentBuyDisplayChart);