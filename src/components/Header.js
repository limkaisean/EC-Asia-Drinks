import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Navbar from "./Navbar";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import { setMeetingRoom } from '../redux/actions';
import MicrosoftLogo from '../MicrosoftLogo.svg';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    }
});

const meetingRooms = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

function Header(props) {
    const dispatch = useDispatch();
    const meetingRoom = useSelector(state => {
        return state.meetingRoom.value;
    });

    const [value, setValue] = React.useState(meetingRoom);
    const [inputValue, setInputValue] = React.useState('');

    const classes = useStyles();
    const [state, setState] = React.useState(false);
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown') {
            return;
        }

        setState(open);
    };

    const list = (anchor) => (
        <div
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            style={drawer}
        >   
            <div style={drawerLogo}><img src={MicrosoftLogo} alt="Microsoft Logo" /></div>
            <div style={drawerLabel}>Experience Center Asia</div>
            <Divider style={topDivider} />
            <Navbar />
            <Divider />
            <Autocomplete
                id="select-meetingroom"
                value={value}
                onClick={e => { e.stopPropagation()}}
                onChange={(event, newValue) => {
                    dispatch(setMeetingRoom(newValue));
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                options={meetingRooms}
                getOptionLabel={(option) => option}
                style={meetingRoomsStyle}
                renderInput={(params) => (
                    <TextField
                        onClick={e => { e.stopPropagation()}}
                      {...params}
                      label="Meeting Room"
                      margin="normal"
                      variant="outlined"
                      InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                )}
            />

            {/* // TODO: make protected */}
            <Link style={baristaLink} to={"/barista"}>Barista Access</Link>
        </div>
    );

    const anchor = 'left';

    return (
        <div style={header}>
            <Button style={side} onClick={toggleDrawer(anchor, true)}><MenuRoundedIcon /></Button>
            <Drawer style={drawer} anchor={anchor} open={state} onClose={toggleDrawer(anchor, false)}>
                {props.isBarista ? <span></span>: list(anchor)}
            </Drawer>
            <div style={middle}>
                <span>{props.title}</span>
                <span style={subtitle}>{
                    props.isBarista ? 
                    (<span>barista</span>) : 
                    (<span>Meeting Room <b>{meetingRoom}</b></span>)
                }
                </span>
            </div>
            <span style={{marginRight: '0', marginLeft: 'auto'}}></span>
        </div>
    );
}

/* CSS */

const header = {
    minHeight: '170px',
    height: '10%',
    minWidth: '375px',
    width: '100%',
    backgroundColor: '#27496D',
    color: '#F3F3F3',
    fontSize: '60px',
    fontFamily: 'Lato',
    fontWeight: '300',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
};

const side = {
    margin: '40px auto',
    marginLeft: '25px',
    height: '50px',
    width: '40px',
    fontSize: 'large',
    backgroundColor: '#F3F3F3'
};

const middle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '30px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '30px',
    textAlign: 'center'
};

const topDivider = {
    height: '10px',
    color: '#27496D'
};

const drawerLogo = {
    padding: '30px',
    paddingBottom: '30px',
    textAlign: 'center',
    height: '40px',
    width: '40px',
};

const drawerLabel = {
    paddingBottom: '20px',
    textAlign: 'center',
    fontFamily: 'Lato',
    fontWeight: '300',
    fontSize: '20px',
    color: '#27496D',
};

const drawer = {
    minWidth: '150px',
    width: '300px',
    textAlign: 'center'
};

const subtitle = {
    paddingTop: '20px',
    fontSize: '20px'
};

const meetingRoomsStyle = { 
    position: 'absolute',
    left: '20%',
    right: '20%',
    bottom: 50
};

const baristaLink = {
    position: 'absolute',
    left: '25%',
    right: '25%',
    bottom: 10,
    fontFamily: 'Lato',
    fontSize: '18px',
    textDecoration: 'none',
    color: '#27496D'
}

export default Header;