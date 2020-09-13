import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { removeAllBeverages, addOrder } from '../../../redux/actions';

import Header from '../../../components/Header';
import Beverage from './Beverage';

import BEVERAGES from '../../../menu';
import Background from '../../../background.png';

const TITLE = 'Checkout';
const ORDER_SUCCESS_MSG = 'Your order has been successfully placed!';
const ORDER_FAILED_MSG = 'We are unable to place your order, please try again or contact our staff';
const EMPTY_CART_MESSAGE = 'Add beverages from the menu!';

function handleOrder(websocket, meetingRoom, byIds) {
    console.log(byIds);
    if (Object.keys(byIds).length > 0) websocket.emit('order_request', {meetingRoom: meetingRoom, beverages: Object.values(byIds)});
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function Checkout(props) {
    const dispatch = useDispatch();

    const meetingRoom = useSelector(state => {
        return state.meetingRoom.value;
    });

    const byIds = useSelector(state => {
        return state.cart.beverages;
    });

    const [openSuccessToast, setOpenSuccessToast] = useState(false);
    const [openFailureToast, setOpenFailureToast] = useState(false);

    useEffect(() => {
        if (!props.websocket) return;
        
        props.websocket.on('order_response', data => {
            if (data.isSuccessful) {
                setOpenSuccessToast(true);
                dispatch(removeAllBeverages());
            } else {
                setOpenFailureToast(true);
            }            
        });

    }, [props.websocket]);
    
    return (
        <div>
        <div style={main}>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openSuccessToast} autoHideDuration={6000} onClose={() => setOpenSuccessToast(false)}>
                <Alert onClose={() => setOpenSuccessToast(false)} severity="success">
                    {ORDER_SUCCESS_MSG}
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openFailureToast} autoHideDuration={6000} onClose={() => setOpenFailureToast(false)}>
                <Alert onClose={() => setOpenFailureToast(false)} severity="error">
                   {ORDER_FAILED_MSG}
                </Alert>
            </Snackbar>

            <Header title={TITLE} />
            <div style={clearContainer}>
                <Button style={clearButton} onClick={() => dispatch(removeAllBeverages())}>
                    Clear All
                </Button>
            </div>
            <div style={beverages}>
                {
                    Object.keys(byIds).length > 0 ? 
                        Object.keys(byIds).map((id, i) => {
                            const beverageName = byIds[id].name;
                            return <Beverage key={i} info={{ ...BEVERAGES[beverageName], ...byIds[id], id}} />
                        }) :
                        EMPTY_CART_MESSAGE
                }
            </div>
            <div style={footing}>
                <Button style={orderButton} onClick={() => handleOrder(props.websocket, meetingRoom, byIds)}>
                    Order
                </Button>
            </div>
        </div>
        </div> 
    )
}

const main = {
    height: '100vh',
    backgroundImage: `url(${Background})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center top',
    fontFamily: 'Segoe UI',
    color: '#000000',
    overflow: 'scroll'
};

const footing = {
    paddingBottom: '40px',
    textAlign: 'right'
};

const beverages = {
    padding: '40px',
    fontFamily: 'Segoe UI',
    fontSize: '32px'
};

const clearContainer = {
    textAlign: 'right',
    marginRight: '40px'
};

const orderButton = {
    width: '150px',
    minHeight: '60px',
    marginLeft: 'auto',
    marginRight: '40px',
    fontFamily: 'Segoe UI',
    fontSize: '23px',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    textTransform: 'none' 
};

const clearButton = {
    height: '50px',
    width: '150px',
    fontFamily: 'Segoe UI',
    fontSize: '18px',
    border: 'none',
    borderRadius: '8px',
    textTransform: 'none',
    color: '#FFFFFF'
};


export default Checkout;