import PropTypes from 'prop-types';
import React from 'react';
import { Drawer, List } from 'material-ui';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import CloseIcon from '@material-ui/icons/close';
import { Link } from 'react-router-dom';

const MainMenu = ({ open, toggle }) => {
    return <Drawer anchor="left" open={open} onClose={() => toggle()}>
        <List style={{ width: '350px' }}>
            <ListItem
                onClick={() => toggle()}
                divider>
                <ListItemIcon>
                    <CloseIcon />
                </ListItemIcon>
                <ListItemText>
                    CLOSE
                </ListItemText>
            </ListItem>
        </List>
        <List component="nav">
            <ListItem button component={Link} to="/mortgage_calculator" onClick={() => toggle()}>
                <ListItemText>
                    MORTGAGE_CALCULATOR
                </ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/compound_calculator" onClick={() => toggle()}>
                <ListItemText>
                    COMPOUND_INTEREST_CALCULATOR
                </ListItemText>
            </ListItem>
        </List>
        <List>
        </List>
    </Drawer>;
};
MainMenu.propTypes = {
    open: PropTypes.bool,
    toggle: PropTypes.func
};

export default MainMenu;