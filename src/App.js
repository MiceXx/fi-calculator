import React from 'react';

import NavBar from './components/NavBar.jsx';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';

import { Alarm } from '@material-ui/icons';

function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <div>
        <NavBar />
        <Alarm />
      </div>
    </MuiThemeProvider >
  );
}

export default App;
