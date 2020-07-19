import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { removeAllBeverages } from '../../../redux/actions';

import Header from '../../../components/Header';
import Beverage from './Beverage';

import BEVERAGES from '../../../menu';

const TITLE = 'CHECKOUT';
const ORDER_SUCCESS_MSG = 'Your order has been successfully placed!';
const ORDER_FAILED_MSG = 'We are unable to place your order, please try again or contact our staff';
const EMPTY_CART_MESSAGE = 'Add beverages from the home page!';

function handleOrder(websocket, byIds) {
    if (Object.keys(byIds).length > 0) websocket.emit('order_request', byIds);
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function Checkout(props) {
    const dispatch = useDispatch();
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
            <div style={heading}>
                Beverages
            </div>
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
                            return <Beverage key={id} info={{ ...BEVERAGES[beverageName], ...byIds[id], id}} />
                        }) :
                        EMPTY_CART_MESSAGE
                }
            </div>
            <br />
            <br />
            <br />
            
            <Button style={orderButton} onClick={() => handleOrder(props.websocket, byIds)}>
                Order
            </Button>
            {/* to conditionally render: */}
            {/* Add beverages from the home page! */}
        </div> 
    )
}

const main = {
    height: '100vh',
    backgroundColor: '#FFECD0',
    fontFamily: 'Lato',
    display: 'flex',
    flexDirection: 'column'
};

const heading = {
    paddingBottom: '30px',
    marginTop: '20px',
    marginLeft: '40px',
    textAlign: 'left',
    fontSize: '47px'
};

const beverages = {
    padding: '40px'
};

const clearContainer = {
    textAlign: 'right',
    marginRight: '40px'
};

const orderButton = {
    width: '170px',
    height: '70px',
    marginLeft: 'auto',
    marginRight: '40px',
    fontFamily: 'Lato',
    fontSize: '23px',
    backgroundColor: 'orange'
};

const clearButton = {
    height: '50px',
    width: '150px',
    fontFamily: 'Lato',
    fontSize: '20px',
    border: 'none',
    borderRadius: '8px',
};


export default Checkout;