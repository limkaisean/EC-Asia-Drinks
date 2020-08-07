import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import { incrementBeverage, reduceBeverage, removeBeverage } from '../../../redux/actions';

function Beverage(props) {
    const dispatch = useDispatch();

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
                            return <div key={i}><span>{option}: </span><span style={optionValue}>{props.info.optionValues[option]}</span></div>
                        })
                    }
                </div>
            </div>
            <div style={buttonContainer}>
                <button style={quantityButton} onClick={() => dispatch(incrementBeverage({ id: props.info.id }))}>
                    +
                </button>
                <div style={quantity}>
                    {props.info.quantity}
                </div>
                <button style={quantityButton} onClick={() => dispatch(reduceBeverage({ id: props.info.id }))}>
                    -
                </button>
                <Button style={deleteButton} onClick={() => dispatch(removeBeverage({ id: props.info.id }))}>
                    &#128465;
                </Button>
            </div>
        </div>
    );
}

/* CSS */

const panel = { 
    margin: '1em auto',
    paddingBottom: '20px',
    minHeight: '180px',
    height: 'auto',
    minWidth: '200px',
    width: '100%',
    backgroundColor: '#ddbfa1',
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
    fontSize: '22px',
    color: '#6E4C1EFF',
    fontWeight: '700'
};

const buttonContainer = {
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center'
};

const quantity = {
    color: '#6E4C1EFF',
    fontSize: '48px',
    fontWeight: '500',
    borderRadius: '20%',
    border: 'none',
    marginRight: '30px'
};

const quantityButton = {
    width: '40px',
    backgroundColor: '#f3f3f3',
    color: '2460A7FF',
    fontSize: '28px',
    border: '3px solid #6E4C1EFF',
    marginRight: '30px',
    textAlign: 'center'
};

const deleteButton = {
    color: '#222831',
    fontSize: '30px',
    borderRadius: '20%',
    border: 'none',
    marginLeft: '50px',
    marginRight: '40px',
    paddingBottom: '10px'
};

const bold = {
    fontWeight: '700'
};

export default Beverage;
