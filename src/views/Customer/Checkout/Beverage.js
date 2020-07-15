import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import store from '../../../redux/store';
import { addBeverage, reduceBeverage, removeBeverage } from '../../../redux/actions';

function handleAddBeverage(beverage) {
    store.dispatch(addBeverage(beverage));
    console.log(store.getState());
}

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
                
            </div>
            <div style={buttonContainer}>
                <button style={quantityButton} onClick={() => dispatch(addBeverage({id: props.info.id}))}>
                    +
                </button>
                <div style={quantity}>
                    {props.quantity}
                </div>
                <button style={quantityButton} onClick={() => dispatch(reduceBeverage({id: props.info.id}))}>
                    -
                </button>
                <Button style={deleteButton} onClick={() => dispatch(removeBeverage({id: props.info.id}))}>
                    del
                </Button>
            </div>
            
        </div>
    );
}

/* CSS */

const panel = {
    minHeight: '100px',
    height: '10%',
    minWidth: '700px',
    width: '100%',
    backgroundColor: '#FFECD0',
    borderRadius: '2px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
};

const buttonContainer = {
   display: 'flex',
   flexDirection: 'row'
};

const quantity = {
    height: '60px',
    width: '60px',
    backgroundColor: '#f3f3f3',
    color: '#222831',
    fontSize: '27px',
    borderRadius: '20%',
    border: 'none',
    marginRight: '40px'
};

const quantityButton = {
    height: '40px',
    width: '40px',
    backgroundColor: '#f3f3f3',
    color: 'orange',
    fontSize: '28px',
    borderRadius: '10ox',
    border: '3px solid orange',
    marginRight: '40px',
};

const deleteButton = {
    height: '50px',
    width: '50px',
    backgroundColor: '#f3f3f3',
    color: '#222831',
    fontSize: '18px',
    borderRadius: '20%',
    border: 'none',
    marginRight: '40px'
};

const name = {
    textAlign: 'left',
    fontSize: '30px',
    padding: '30px',
    fontWeight: '900',
};

const description = {
    textAlign: 'left',
    fontSize: '26px',
    padding: '10px 30px',
    width: '80%',
    minWidth: '20%'
};

const bold = {
    fontWeight: '700'
};

const id = {
    marginTop: '2px',
    textAlign: 'left',
};

export default Beverage;
