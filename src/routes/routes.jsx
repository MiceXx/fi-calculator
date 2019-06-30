import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Whatshot, Domain } from '@material-ui/icons';
import NavBar from '../components/NavBar.jsx';
import FireCalculator from '../components/FireCalculator/FireCalculator.jsx';
import RentBuyCalculator from '../components/RentBuyCalculator/RentBuyCalculator.jsx';

const APP_ROUTES = [
    {
        path: '/fire',
        component: FireCalculator,
        icon: Whatshot,
        label: 'FIRE Calculator'
    },
    {
        path: '/rentorbuy',
        component: RentBuyCalculator,
        icon: Domain,
        label: 'Rent or Buy?'
    },

];

const AppRoutes = () => (
    <BrowserRouter>
        <Route path="*" component={NavBar} />
        <Redirect from="/" to="/fire/" />
        {APP_ROUTES.map(route => (
            <Route
                key={route.label}
                exact
                path={route.path}
                label={route.label}
                icon={route.icon}
                component={route.component} />
        ))}
    </BrowserRouter>
);

export default AppRoutes;