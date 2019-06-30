import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import MainMenu from './MainMenu.jsx';
import { APP_ROUTES } from '../routes/routes.config';

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

const ButtonAppBar = ({ calculatorType, location }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const classes = useStyles();
  const selectedRoute = APP_ROUTES.find(route => route.path === location.pathname);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon onClick={() => setIsMenuVisible(!isMenuVisible)} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {selectedRoute ? selectedRoute.label : 'Home'}
          </Typography>
        </Toolbar>
      </AppBar>
      <MainMenu
        open={isMenuVisible}
        toggle={() => setIsMenuVisible(!isMenuVisible)}
      />
    </div>
  );
}

const mapStateToProps = ({ general }) => {
  return {
    calculatorType: general.calculatorType
  }
}

const mapDispatchToProps = (dispatch) => (
  {

  }
)

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar);