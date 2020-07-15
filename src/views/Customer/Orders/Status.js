import React from 'react';

const STATUS = [
    'received',
    'preparing',
    'serving',
    'completed'
];

function Status(props) {
    const numStatus = STATUS.length;
    return (
        <div style={bar}>
                {
                    STATUS.map((s, i) => {
                        const isSelected = props.current === s;
                        return (
                            <span style={bar}>
                                {
                                    getLabelCircle(s, isSelected)
                                }
                                {/* { 
                                   
                                    i !== numStatus - 1 ? (<span style={connector}></span>) : (<span></span>)
                                    
                                } */}
                            </span>
                        );
                    })
                }                
        </div>
    );
}

function getLabelCircle(status, isSelected) {
    return (   
            <div key={status} style={labelCircle}>
                {
                    isSelected ? 
                        (   
                            <span>
                                <div style={selectedCircle}></div>
                                <div style={labelSelected}>
                                    {status}
                                </div>
                            </span>
                           
                        ) : 
                        (
                            <span>
                                <div style={circle}></div>
                                <div style={label}>
                                    {status}
                                </div>
                            </span>
                        )
                }
            </div>
    );
}

/* CSS */

const bar = {   
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
};

const labelCircle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: '15px',
    paddingRight: '15px'
};

const label = {
    fontSize: '20px',
    marginTop: '10px',
    color: '#674F04',
};

const labelSelected = {
    fontSize: '20px',
    color: '#0074E4',
    fontWeight: '700'
};

const selectedCircle = {
    height: '100px',
    width: '100px',
    display: 'inline-block',
    backgroundColor: '#0074E4',
    borderRadius: '50%'
};

const circle = {
    height: '70px',
    width: '70px',
    display: 'inline-block',
    backgroundColor: '#CDBBA3',
    borderRadius: '50%',
};

const connector = {
    width: '1em',
    height: '10px',
    backgroundColor: '#F3F3F3',
    display: 'inline-block',
    marginBottom: '40px'
}; 

export default Status;