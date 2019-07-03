import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import muiTheme from './theme/muiTheme';
import { store } from './app-helper';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={muiTheme}>
        <AppRoutes />
      </MuiThemeProvider >
    </Provider>
  );
}

export default App;
