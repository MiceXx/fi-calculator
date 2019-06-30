import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { APP_ROUTES } from '../routes/routes.config';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const MainMenu = (props) => {
    const { open, toggle } = props;
    const classes = useStyles();
    const contentStyle = { transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };

    // if (drawerOpen) {
    //     contentStyle.marginLeft = 256;
    // }

    return (
        <div>
            <Drawer open={open} onClose={toggle}>
                <div
                    className={classes.list}
                    role="presentation"
                >
                    <List>
                        {APP_ROUTES.map(route => (
                            <ListItem key={route.path} component={Link} to={route.path}>
                                <ListItemIcon><route.icon/></ListItemIcon>
                                <ListItemText primary={route.label} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </div>
            </Drawer>
        </div>
    );
}

export default MainMenu;