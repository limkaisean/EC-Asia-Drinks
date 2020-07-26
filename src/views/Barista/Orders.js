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

        props.websocket.on('barista_order_relay', order => {
            // const newOrders = _.cloneDeep(orders);
            // newOrders[order.id] = order;
            setOrders({});
        });

        props.websocket.on('update_orders', data => {
            setOrders(data.orders);
        });

        props.websocket.emit('barista_orders_request', {});

    }, [props.websocket]);

    return (
        <div style={main}>
            <Header title={TITLE} />
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

const header = {
    minHeight: '150px',
    height: '10%',
    width: '100%',
    margin: '0 auto',
    backgroundColor: '#5CC2F2',
    color: '#F3F3F3',
    fontSize: '70px',
    fontFamily: 'Lato',
    fontWeight: '300'
};

const ordersList = {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFECD0',
};

export default Orders;