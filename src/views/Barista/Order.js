import React, { useEffect, useState } from 'react';

import Dialog from '@material-ui/core/Dialog';

import OrderPopup from './OrderPopup';

function Order(props) {
    const [info, setInfo] = useState(props.info);

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
        <div>
            <div style={panel} onClick={handleClickOpen}>
                <div style={idStyle}>
                    #<span style={bold}>{info.id}</span>
                </div>
                <div style={middleInfo}>
                    <div style={meetingRoomStyle}>
                        Meeting Room <span style={bold}>{info.meetingRoom}</span>
                    </div>
                    <div style={rightInfo}>
                        {info.status}
                    </div>
                </div>
                <div style={timeStyle}>
                    Ordered at <span style={bold}>{info.time}</span>
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
    fontSize: '36px',
    fontFamily: 'Lato',
    fontWeight: '300',
    color: '#915B4A'
};

const middleInfo = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
};

const rightInfo = {
    padding: '20px',
    paddingRight: '50px',
    fontSize: '48px',
    color: '#0074E4',
    fontWeight: '700',
}

const meetingRoomStyle = {
    padding: '20px',
    textAlign: 'left',
};


const bold = {
    fontWeight: '700'
};

const title = {
    ...bold,
    fontSize: '35px'
};

const idStyle = {
    padding: '20px',
    textAlign: 'left',
};

const timeStyle = {
    padding: '20px',
    textAlign: 'left',
};

export default Order;