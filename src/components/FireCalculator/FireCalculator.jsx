import React, {Fragment } from 'react';

import Calc1 from './Calc1.jsx';
import DisplayChart from './DisplayChart.jsx';

const FireCalculator = () => {
    return (
        <Fragment>
            <Calc1 />
            <DisplayChart />
        </Fragment>
    );
}

export default FireCalculator;