import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Menu } from '@material-ui/core';
import Navbar from "./Navbar";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import { setMeetingRoom } from '../redux/actions';

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
                style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
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
        </div>
    );

    const anchor = 'left';

    return (
        <div style={header}>
            <Button style={sideElement} onClick={toggleDrawer(anchor, true)}><MenuRoundedIcon /></Button>
            <Drawer style={drawer} anchor={anchor} open={state} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
            </Drawer>
            <span style={title}>{props.title}</span>
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

const sideElement = {
    margin: '40px auto',
    marginLeft: '25px',
    height: '50px',
    width: '40px',
    fontSize: 'large',
    backgroundColor: '#F3F3F3'
};

const drawer = {
    minWidth: '150px',
    width: '200px'
};

const title = {
    textAlign: 'center',
    marginTop: '30px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '30px'
};

export default Header;