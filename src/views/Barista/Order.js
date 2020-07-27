import React, { useEffect, useState } from 'react';

import Dialog from '@material-ui/core/Dialog';

import OrderPopup from './OrderPopup';

function Order(props) {
    const [info, setInfo] = useState(props.info);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        setInfo(props.info);
    }, [props.info]);

    const [open, setOpen] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState('lg');
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)} >
            <div style={isHovering ? panelHover : panel} onClick={handleClickOpen}>
                <div style={fixedInfo}>
                    <div style={idStyle}>
                        #<span style={bold}>{info.id}</span>
                    </div>
                    <div style={timeStyle}>
                        Ordered at <span style={bold}>{info.time}</span>
                    </div>
                    <div style={meetingRoomStyle}>
                        Meeting Room <span style={bold}>{info.meetingRoom}</span>
                    </div>
                </div>
                <div style={statusStyle}>
                    <span style={shadow}>{info.status}</span>
                </div>
            </div>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >   
                <OrderPopup websocket={props.websocket} handleClose={handleClose} info={info} />
            </Dialog>
        </div>
    );
}

/* CSS */

const panel = {
    minHeight: '200px',
    height: '10%',
    minWidth: '700px',
    width: '90%',
    margin: '2% auto',
    backgroundColor: '#F0CB94',
    borderRadius: '2px',
    fontFamily: 'Lato',
    fontSize: '30px',
    fontWeight: '300',
    color: '#915B4A',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
};

const panelHover = {
    ...panel,
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
};

const fixedInfo = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
};

const statusStyle = {
    fontSize: '48px',
    color: '#0074E4',
    fontWeight: '700',
    marginRight: '40px'
};

const shadow = {
    textShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
};

const meetingRoomStyle = {
    padding: '10px 20px',
    paddingBottom: '10px',
    textAlign: 'left',
};

const bold = {
    fontWeight: '700'
};

const idStyle = {
    padding: '10px 20px',
    paddingBottom: '10px',
    textAlign: 'left',
};

const timeStyle = {
    padding: '10px 20px',
    paddingBottom: '10px',
    textAlign: 'left',
};

export default Order;