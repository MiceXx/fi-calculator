import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar.jsx';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';

function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </MuiThemeProvider >
  );
}

export default App;
