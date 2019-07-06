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
import theme from '../theme';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

interface MainMenuProps {
    open: boolean,
    toggle: () => void,
}

const MainMenu: React.FC<MainMenuProps> = (props) => {
    const { open, toggle } = props;
    const classes = useStyles(theme);

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
                                <ListItemIcon><route.icon /></ListItemIcon>
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