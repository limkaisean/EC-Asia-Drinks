import React, { useState, useEffect } from 'react';

import Header from '../../../components/Header';
import Order from './Order';

function Orders(props) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (!props.websocket) return;

        props.websocket.on('receive_orders', data => {
            setOrders(data);
        });

        props.websocket.emit('request_orders', {});
        console.log('emitted');
    }, [props.websocket]);

    return (
        <div className="OrdersCustomers" style={main}>
            <Header title="ORDERS" />
            <div style={ordersList}>
                {
                    orders.map((obj, i) => {
                        return <Order key={obj.id} id={obj.id} status={obj.status} time={obj.time} />
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
    height: '100%',
    width: '100%',
    backgroundColor: '#FFECD0',
};

export default Orders;