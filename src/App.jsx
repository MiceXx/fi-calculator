import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import theme from './theme';
import { store } from './app-helper';
import AppRoutes from './routes/AppRoutes';

const App = () => (
  <Provider store={store} >
    <MuiThemeProvider theme={theme}>
      <AppRoutes />
    </MuiThemeProvider >
  </Provider>
);

export default App;
