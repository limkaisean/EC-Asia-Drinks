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
                        Object.keys(props.info.optionValues).map((option, _) => {
                            return <div><span>{option}:</span> <span style={optionValue}>{props.info.optionValues[option]}</span></div>
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
    minHeight: '170px',
    height: '10%',
    minWidth: '700px',
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
    color: 'orange',
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
    color: 'orange',
    borderRadius: '20%',
    border: 'none',
    marginRight: '30px'
};

const quantityButton = {
    width: '40px',
    backgroundColor: '#f3f3f3',
    color: 'orange',
    fontSize: '28px',
    border: '3px solid orange',
    marginRight: '30px',
    textAlign: 'center'
};

const deleteButton = {
    color: '#222831',
    fontSize: '24px',
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
