import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import { APP_ROUTES } from './routes.config';

const AppRoutes = () => (
    <BrowserRouter>
        <Route path="*" component={NavBar} />
        <Redirect from="/" to="/fire" />
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