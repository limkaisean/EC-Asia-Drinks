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

    const [isHovering, setIsHovering] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const onMouseEnter = () => {
        setIsHovering(true);
    };

    const onMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave} > 
            <div style={isHovering ? panelHover : panel} onClick={handleOpen}>
                <div style={fixedInfo}>
                    <div style={idStyle}>
                        #<span style={bold}>{id}</span>
                    </div>
                    <div style={timeStyle}>
                        Ordered at <span style={bold}>{time}</span>
                    </div>
                </div>
                <Status current={status} style={statusStyle}/>
                <span></span>
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
    minHeight: '150px',
    height: 'auto',
    minWidth: '160px',
    width: '90%',
    margin: '2% auto',
    backgroundColor: '#ffffff',
    borderRadius: '2px',
    fontSize: '28px',
    fontFamily: 'Segoe UI',
    fontWeight: '300',
    color: '#000000',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '20px',  
};

const panelHover = {
    ...panel,
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
};

const fixedInfo = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between',
};

const popupHeader = {
    backgroundColor: '#ffffff',
    color: '#000000'
};

const popupBody = {
    backgroundColor: '#263961'
};

const closeButton = {
    color: "#ffffff"
};

const bold = {
    fontWeight: '700'
};

const idStyle = {
    padding: '15px',
    textAlign: 'left',
};

const timeStyle = {
    padding: '15px',
    textAlign: 'left',
};

const statusStyle = {
    flex: '0 1 40%'
}

export default Order;