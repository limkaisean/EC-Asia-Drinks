import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

import { removeAllBeverages } from '../../../redux/actions';

import Header from '../../../components/Header';
import Beverage from './Beverage';

const TITLE = 'CHECKOUT';

const BEVERAGES = [
    {
        id: 0,
        quantity: 2,
        name: 'Full-Leaf Brewed Tea',
        description: "From the British classic afternoon tea to the Chinese tea ceremony, the tradition of sipping on a relaxing cup of tea is celebrated all over the world. We offer 8 amazing blends of full-leaf teas, made with the world's most delicious teas and botanicals."
    },
    {
        id: 1,
        quantity: 1,
        name: 'Tea Latte',
        description: "A frothy reinvention of the favorite latte. Savor your latte with the bright lavender notes of Earl Grey tea or sip on a malty English Breakfast Tea Latte, made from a select brand of rich teas from India and Sri Lanka."
    },
    {
        id: 2,
        quantity: 3,
        name: 'Pure Matcha Tea Latte',
        description: "Meet the Pure Matcha Tea Latte – a smooth, creamy and lightly sweetened beverage that's made from premium microground matcha and served with steamed milk. Available hot and iced and you can opt to have yours unsweetened too."
    }
];

function handleOrder(websocket, byIds) {
    websocket.emit('order_request', byIds);
}

function Checkout(props) {
    const dispatch = useDispatch();
    const byIds = useSelector(state => state.cartBeverages);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (!props.websocket) return;

        props.websocket.on('order_response', data => {
            dispatch(removeAllBeverages());
            // show toast notification
        });

    }, [props.websocket]);
    
    return (
        <div style={main}>
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
                    BEVERAGES.map((bev, i) => {
                        return <Beverage key={bev.id} info={bev} />
                    })
                }
            </div>
            <br />
            <br />
            <br />
            
            <Button style={orderButton} onClick={() => handleOrder(props.websocket, dispatch)}>
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
    marginTop: '20px',
    marginLeft: '40px'
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