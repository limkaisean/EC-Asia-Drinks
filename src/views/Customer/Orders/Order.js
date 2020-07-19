import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';

import Status from './Status';




function Order(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function showDrinks(event) {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;



    return (
        <div>
            <div style={panel}>
                <div style={id}>
                    #<span style={bold}>{props.id}</span>
                </div>
                <Status current={props.status} />
                <div style={id}>
                    Ordered at <span style={bold}>{props.time}</span>
                </div>
            </div>
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
    backgroundColor: '#E3D9CA',
    borderRadius: '2px',
    fontSize: '42px',
    fontFamily: 'Lato',
    fontWeight: '300',
    color: '#915B4A'
};

const bold = {
    fontWeight: '700'
};

const id = {
    marginTop: '2px',
    textAlign: 'left',
};

export default Order;