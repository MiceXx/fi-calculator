import React from 'react';

import NavBar from './components/NavBar.jsx';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';

import { Alarm, MusicNote, Radio, Mail, Cake, Label, Nature } from '@material-ui/icons';

function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <div>
        <NavBar />
        <Alarm />
        <MusicNote />
        <Radio />
        <Mail />
        <Cake />
        <Label />
        <Nature />
      </div>
    </MuiThemeProvider >
  );
}

export default App;
