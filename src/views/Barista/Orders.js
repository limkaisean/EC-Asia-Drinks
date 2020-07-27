import React, { useState, useEffect } from 'react';
import _ from 'underscore';

import Header from '../../components/Header';
import Order from './Order';
import Statistics from './Statistics';

const TITLE = 'Orders';

function Orders(props) {
    const [orders, setOrders] = useState({});
   

    useEffect(() => {
        if (!props.websocket) return;

        props.websocket.on('barista_orders_response', orders => {
            setOrders(orders);
        });

        props.websocket.on('update_orders', data => {
            setOrders(data.orders);
        });

        props.websocket.emit('barista_orders_request', {});

    }, [props.websocket]);

    return (
        <div style={main}>
            <Header title={TITLE} isBarista={true} />
            <Statistics orders={orders} />
            <div style={ordersList} >
                {
                    Object.keys(orders).map((id, i) => {
                        console.log(id, orders[id])
                        return <Order key={i} websocket={props.websocket} info={orders[id]} />
                    })
                }
            </div>
        </div>
    );
}

/* CSS */

const main = {
    height: '100%',
    width: '100%',
    margin: '0',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column'
};

const ordersList = {
    height: '90%',
    width: '100%',
    backgroundColor: '#FFECD0',
};

export default Orders;