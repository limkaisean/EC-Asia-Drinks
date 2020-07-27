import React from 'react';
<<<<<<< HEAD
import Button from '@material-ui/core/Button';

function Beverage(props) {
=======
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

function Beverage(props) {
    const dispatch = useDispatch();

>>>>>>> master
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
<<<<<<< HEAD
                            return <div key={i}><span style={optionValue}>{props.info.optionValues[option]}</span></div>
=======
                            return <div key={i}><span>{option}:</span> <span style={optionValue}>{props.info.optionValues[option]}</span></div>
>>>>>>> master
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
<<<<<<< HEAD
    color: '#eb8242',
=======
    color: 'orange',
>>>>>>> master
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
<<<<<<< HEAD
    color: '#eb8242',
=======
    color: 'orange',
>>>>>>> master
    borderRadius: '20%',
    border: 'none',
    marginRight: '30px'
};

<<<<<<< HEAD
=======
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

>>>>>>> master
export default Beverage;
