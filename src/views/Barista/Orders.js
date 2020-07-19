import React, { useState, useEffect } from 'react';

import Order from './Order';


const Status = {
    received: 'received',
    preparing: 'preparing',
    serving: 'serving',
    completed: 'completed'
};

function Orders(props) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (!props.websocket) return;

        // props.websocket.on('receive_orders', data => {
        //     setOrders(data);
        // });

        // props.websocket.emit('request_orders', {});
        // console.log('emitted');
    }, [props.websocket]);

    return (
        <div className="OrdersCustomers" style={main}>
            <div style={header}>
                <span margintop='50px'>Orders</span>
            </div>
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
    backgroundColor: '#F3F3F3',
};

export default Orders;