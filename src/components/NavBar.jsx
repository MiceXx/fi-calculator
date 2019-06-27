import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import FireCalculator from './FireCalculator/FireCalculator.jsx';

import MainMenu from './MainMenu.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar=() =>{
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon onClick={() => setIsMenuVisible(!isMenuVisible)} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
      <MainMenu
        open={isMenuVisible}
        toggle={() => setIsMenuVisible(!isMenuVisible)}
      />

      <Route path="/" exact component={FireCalculator} />
      <Route path="/fire/" component={FireCalculator} />
    </div>
  );
}

export default ButtonAppBar;