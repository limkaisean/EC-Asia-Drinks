import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

import Status from './Status';
import Beverage from './Beverage';

function Order(props) {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleMaxWidthChange = (event) => {
      setMaxWidth(event.target.value);
    };
  
    const handleFullWidthChange = (event) => {
      setFullWidth(event.target.checked);
    };

    return (
        <div>
            <div style={panel} onClick={handleClickOpen}>
                <div style={id}>
                    #<span style={bold}>{props.id}</span>
                </div>
                <Status current={props.status} />
                <div style={time}>
                    Ordered at <span style={bold}>{props.time}</span>
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
                    <DialogTitle id="max-width-dialog-title">#<span style={bold}>{props.id}</span></DialogTitle>
                </div>
                <div style={popupBody}> 
                    <DialogContent>
                        {props.drinks.map((drink, i) => {
                            return <Beverage key={drink.name} info={drink} />
                        })}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="#27496D">
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

const bold = {
    fontWeight: '700'
};

const title = {
    ...bold,
    fontSize: '35px'
};

const id = {
    padding: '15px',
    textAlign: 'left',
};

const time = {
    padding: '15px',
    textAlign: 'left',
};

export default Order;