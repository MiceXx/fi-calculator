import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { Help } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles(() => ({
    icon: {
        marginLeft: '10px',
        width: '1rem',
    },
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        backgroundColor: 'black',
        color: 'white',
    },
}));

interface InfoButtonProps{
    text: string
}

const InfoButton: React.FC<InfoButtonProps> = (props) => {
    const { text } = props;
    const classes = useStyles(theme);
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handlePopoverOpen(event: any) {
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