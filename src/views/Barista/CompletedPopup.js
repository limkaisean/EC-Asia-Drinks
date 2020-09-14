import React from 'react';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


function CompletedPopup(props) {
    return (
        <div style={header}>
            <div>Complete order&nbsp;<span style={id}>#{props.id}</span>?</div>
            <Button onClick={props.handleConfirm} style={yesButton}>Yes</Button>
        </div>
    );
}

/* CSS */

const header = {
    backgroundColor: '#263961',
    fontFamily: 'Segoe UI',
    color: '#ffffff',
    fontSize: '50px',
    fontWeight: '300',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
};

const id = {
    paddingLeft: '2px',
    fontWeight: '700'
};

const yesButton = {
    marginTop: '20px',
    borderRadius: '25px',
    backgroundColor: '#ffffff',
    fontFamily: 'Segoe UI',
    fontWeight: '700',
    fontSize: '26px',
    color: '#263961',
    height: '70px',
    width: '40%'
};


export default CompletedPopup;