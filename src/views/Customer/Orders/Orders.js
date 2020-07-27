import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Header from '../../../components/Header';
import Order from './Order';

const TITLE = 'Orders';

function Orders(props) {
    const meetingRoom = useSelector(state => {
        return state.meetingRoom.value;
    });

    const [orders, setOrders] = useState({});

    useEffect(() => {
        if (!props.websocket) return;

        props.websocket.on('confirmed_orders_response', orders => {
            setOrders(orders);
        });

        props.websocket.on('update_status_relay', data => {
            setOrders({});
        });
        
        props.websocket.emit('confirmed_orders_request', { meetingRoom: meetingRoom });
    }, [props.websocket, meetingRoom]);

    return (
        <div className="OrdersCustomers" style={main}>
            <Header title={TITLE} />
            <div style={ordersList}>
                {
                    Object.keys(orders).map((id, i) => {
                        return <Order key={i} info={orders[id]} />
                    })
                }
            </div>
        </div>
    );
}

/* CSS */

const main = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
};

const ordersList = {
    height: '90%',
    width: '100%',
    backgroundColor: '#FFECD0',
};

export default Orders;
