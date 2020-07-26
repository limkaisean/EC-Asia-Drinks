import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Status from './Status';
import Beverage from './Beverage';

function Order(props) {
    const { id,  status, meetingRoom, time, beverages, ...other } = props.info;

    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
  
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
                    #<span style={bold}>{id}</span>
                </div>
                <Status current={status} />
                <div style={timeStyle}>
                    Ordered at <span style={bold}>{time}</span>
                </div>
            </div>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >   
                <div style={popupHeader}>
                    <DialogTitle id="max-width-dialog-title">#<span style={bold}>{id}</span></DialogTitle>
                </div>
                <div style={popupBody}> 
                    <DialogContent>
                        {beverages.map((drink, i) => {
                            return <Beverage key={drink.name} info={drink} />
                        })}
                    </DialogContent>
                    <DialogActions>
                        <Button style={closeButton} onClick={handleClose}>
                            Close
                        </Button>
                    </DialogActions>
                </div>
                
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
    fontSize: '42px',
    fontFamily: 'Lato',
    fontWeight: '300',
    color: '#915B4A'
};

const popupHeader = {
    backgroundColor: '#27496D',
    color: '#f3f3f3'
};

const popupBody = {
    backgroundColor: '#FFECD0'
};

const closeButton = {
    color: "#27496D"
};

const bold = {
    fontWeight: '700'
};

const title = {
    ...bold,
    fontSize: '35px'
};

const idStyle = {
    padding: '15px',
    textAlign: 'left',
};

const timeStyle = {
    padding: '15px',
    textAlign: 'left',
};

export default Order;