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
                                <div style={circleSelected}></div>
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
    color: '#915B4A',
};

const labelSelected = {
    fontSize: '20px',
    backgroundColor: '#eb8242',
    color: '#F3F3F3',
    marginBottom: '17px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
};

const circleSelected = {
    height: '100px',
    width: '100px',
    display: 'inline-block',
    backgroundColor: '#eb8242',
    borderRadius: '50%',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
};

const circle = {
    height: '70px',
    width: '70px',
    display: 'inline-block',
    backgroundColor: '#915B4A',
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