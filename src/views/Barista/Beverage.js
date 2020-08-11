import React from 'react';

function Beverage(props) {
    return (
        <div style={panel}>
            <div>
                <div style={name}>
                    {
                        props.info.name
                    }
                </div>
                <div style={options}>
                    {
                        Object.keys(props.info.optionValues).map((option, i) => {
                            return <div key={i}><span style={optionValue}><span>{option}: </span>{props.info.optionValues[option]}</span></div>
                        })
                    }
                </div>
            </div>
            <div style={buttonContainer}>
                <div style={quantity}>
                    {props.info.quantity}
                </div>
            </div>
        </div>
    );
}

/* CSS */

const panel = {
    margin: '1em auto',
    paddingBottom: '20px',
    height: '10%',
    width: '100%',
    backgroundColor: '#ddbfa1',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#915B4A',
};

const name = {
    textAlign: 'left',
    fontSize: '30px',
    padding: '30px',
    fontWeight: 'normal',
};

const options = {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '20px',
    textAlign: 'left',
    padding: '0 30px'
};

const optionValue = {
    fontSize: '20px',
    color: 'black',
    fontWeight: 'normal'
};

const buttonContainer = {
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center'
};

const quantity = {
    fontSize: '40px',
    fontWeight: '900',
    color: 'black',
    borderRadius: '20%',
    border: 'none',
    marginRight: '30px'
};

export default Beverage;
