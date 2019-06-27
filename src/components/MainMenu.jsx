import React from 'react';
import { Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Whatshot } from '@material-ui/icons';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const MainMenu = ({ open, toggle }) => {
    const classes = useStyles();

    return (
        <div>
            <Drawer open={open} onClose={toggle}>
                <div
                    className={classes.list}
                    role="presentation"
                >
                    <List>
                        <ListItem component={Link} to="/fire">
                            <ListItemIcon><Whatshot /></ListItemIcon>
                            <ListItemText primary="FIRE Calculator" />
                        </ListItem>
                    </List>
                    <Divider />
                </div>
            </Drawer>
        </div>
    );
}

export default MainMenu;