import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { Help } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    icon: {
        marginLeft: '10px',
        width: '1rem',
    },
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
        backgroundColor: 'black',
        color: 'white',
    },
}));

const InfoButton = (props) => {
    const { text } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handlePopoverOpen(event) {
        setAnchorEl(event.currentTarget);
    }

    function handlePopoverClose() {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);

    return (
        <div>
            <Help
                className={classes.icon}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            />
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography>{text}</Typography>
            </Popover>
        </div>
    );
}
export default InfoButton;