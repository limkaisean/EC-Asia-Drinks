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
                            return <div key={i}><span style={optionValue}>{props.info.optionValues[option]}</span></div>
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
    backgroundColor: '#f6c667',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
};

const name = {
    textAlign: 'left',
    fontSize: '30px',
    padding: '30px',
    fontWeight: '900',
};

const options = {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '20px',
    textAlign: 'left',
    padding: '0 30px'
};

const optionValue = {
    fontSize: '22px',
    color: '#eb8242',
    fontWeight: '900'
};

const buttonContainer = {
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center'
};

const quantity = {
    color: '#222831',
    fontSize: '48px',
    fontWeight: '900',
    color: '#eb8242',
    borderRadius: '20%',
    border: 'none',
    marginRight: '30px'
};

export default Beverage;
