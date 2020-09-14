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
import Cart from '../shoppingCart.png';
import Banner from '../banner.png';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    }
});

const meetingRooms = ['Suite 1', 'Suite 2', 'Suite 3', 'Suite 4', 'Suite 5', 'Innovation Factory', 'Suite A', 'Suite B', 'Suite C', 'Suite D', 'Suite E'];

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
                <span style={title}>{props.title}</span>
                <span style={subtitle}>{
                    props.isBarista ? 
                    (<span>barista</span>) : 
                    (<span>Meeting Room <b style={meetingRoomTitle}>{meetingRoom}</b></span>)
                }
                </span>
            </div>
            {props.isBarista ?
                <img src={Cart} style={cart}/>
                :
                <Link to= '/checkout'>
                    <img src={Cart} style={cart}/>
                </Link>
            }          
        </div>
    );
}

/* CSS */

const header = {
    minHeight: '150px',
    height: '20%',
    minWidth: '375px',
    width: '100%',
    backgroundColor: '#263961',
    color: '#000000',
    fontSize: '40px',
    fontFamily: 'Segoe UI',
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
    //marginLeft: 'auto',
    marginRight: 'auto',
    //paddingLeft: '30px',
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
    fontFamily: 'Segoe UI',
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
    //paddingTop: '20px',
    fontSize: '20px',
    color: '#FFFFFF',
    fontWeight: '500',
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
    fontFamily: 'Segoe UI',
    fontSize: '18px',
    textDecoration: 'none',
    color: '#27496D'
}

const cart = {
    width: '40px',
    margin: '40px 40px 25px 0px'
}

const title = {
    color: '#FFFFFF',
    fontWeight: '500',
}

const meetingRoomTitle = {
    color: '#FFFFFF',
}

export default Header;