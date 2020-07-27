import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Dialog from '@material-ui/core/Dialog';

import CompletedPopup from './CompletedPopup';


const STATUS = ['received', 'preparing', 'serving', 'completed'];

function a11yProps(index, completed=null) {
    if (completed) {
        completed();
    }

    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

function statusIndex(status) {
    for (let i = 0; i < STATUS.length; i++) {
        if (STATUS[i] === status) {
            return i;
        }
    }

    return 0;
}

function Status(props) {
    const { id, status, meetingRoom, time, beverages, ...other } = props.info;

    const [value, setValue] = React.useState(statusIndex(status));
    const [completedOpen, setCompletedOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');


    const handleCompletedOpen = () => {
        setCompletedOpen(true);
    };

    const handleCompletedClose = () => {
        setCompletedOpen(false);
    };

    const handleCompletedConfirm = () => {
        const toSend = {id: id, meetingRoom: meetingRoom, status: STATUS[3]};
        props.websocket.emit('update_status_request', toSend); 
        setValue(3);
        handleCompletedClose();
        props.handleOrderClose();
    };

    const handleChange = (event, newValue) => {
        if (newValue === value) {
            return;
        }

        if (newValue !== 3) { // if completed is not confirmed, the value should be what it originally was
            setValue(newValue);
            if (props.websocket) {
                console.log(meetingRoom);
                const toSend = {meetingRoom: meetingRoom, id: id, status: STATUS[newValue]};
                props.websocket.emit('update_status_request', toSend); 
            } else {
                // TODO: disable app until connected to server
            }
        }
    };

    return (
        <div style={main}>
            <AppBar position="static" style={bar}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="off"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab style={value === 0 ? tabSelected : tab} label={STATUS[0]}  {...a11yProps(0)} />
                    <Tab style={value === 1 ? tabSelected : tab} label={STATUS[1]}  {...a11yProps(1)} />
                    <Tab style={value === 2 ? tabSelected : tab} label={STATUS[2]} {...a11yProps(2)} />
                    <Tab onClick={handleCompletedOpen} style={value === 3 ? tabSelected : tab} label={STATUS[3]} {...a11yProps(3)} />
                </Tabs>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={completedOpen}
                    onClose={handleCompletedClose}
                    aria-labelledby="max-width-dialog-title"
                >   
                    <CompletedPopup id={id} handleConfirm={handleCompletedConfirm} />
            </Dialog>
            </AppBar>
        </div>
    );
}

/* CSS */

const main = {
    minHeight: '90px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
};

const bar = {
    width: 'auto',
    backgroundColor: '#F3F3F3'
};

const tab = {
    backgroundColor: '#F3F3F3',
    border: '1px solid #dfd3c3',
    color: '#ad9d9d',
    fontFamily: 'Lato',
    fontWeight: '700'
};

const tabSelected = {
    ...tab,
    backgroundColor: '#0074E4',
    border: '3px solid #0074E4',
    color: '#F3F3F3'
};

export default Status;