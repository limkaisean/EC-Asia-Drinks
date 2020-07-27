import React, { useEffect, useState } from 'react';

import _ from 'underscore';

const STATUS = ['received', 'preparing', 'serving'];

function statusCounts(orders) {

    const counts = {};
    for (const s of STATUS) {
        counts[s] = 0;
    }

    Object.keys(orders).forEach(id => {
        const order = orders[id];
        if (counts.hasOwnProperty(order.status)) {
            counts[order.status] += 1;
        }
    });

    return counts;
}

function Statistics(props) {
    const [grouped, setGrouped] = useState(statusCounts(props.orders));

    useEffect(() => {
        setGrouped(statusCounts(props.orders));
    }, [props.orders]);

    return (
        <div style={main}>
            {
                Object.keys(grouped).map((k, i) => {
                    return (
                        <div key={i} style={statistic}>
                            <span style={number}>{grouped[k]}</span> {k}
                        </div>
                    );
                })
            }
        </div>
    );
}

/* CSS */

const main = {
    minHeight: '90px',
    backgroundColor: '#5CC2F2',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
};

const statistic = {
    color: '#F3F3F3',
    fontSize: '38px',
    padding: '25px'
};

const number = {
    fontSize: '50px',
    fontWeight: '900'
};

export default Statistics;