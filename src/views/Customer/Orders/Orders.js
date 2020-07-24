import React, { useState, useEffect } from 'react';

import Header from '../../../components/Header';
import Order from './Order';

const TITLE = 'Orders';

function Orders(props) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (!props.websocket) return;

        props.websocket.on('confirmed_orders_response', data => {
            setOrders(orders.concat(data));
        });

        props.websocket.on('order_status_updated', data => {
            setOrders(data.push);
            console.log(data);
        });

        props.websocket.emit('confirmed_orders_request', {});
    }, [props.websocket]);

    return (
        <div className="OrdersCustomers" style={main}>
            <Header title={TITLE} />
            <div style={ordersList}>
                {
                    orders.map((obj, i) => {
                        return <Order key={obj.id} id={obj.id} status={obj.status} time={obj.time} drinks={obj.drinks} />
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