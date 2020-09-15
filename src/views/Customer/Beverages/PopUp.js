import React from 'react';
 
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Alert from '@material-ui/lab/Alert';

import { addBeverage } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

function PopUp(props){
    const dispatch = useDispatch();
    function submitOrder(){
        const optionValues = {};
        Object.keys(options).map((key) => {
            optionValues[key] = options[key];
        })

        if (comments !== ''){
            optionValues['Comment'] = comments;
        }

        if (name !== ''){
            optionValues['Name'] = name;
        }

        if (quantity !== ''){
            dispatch(addBeverage({ ...props.info, quantity: quantity, optionValues: optionValues}));
            props.handleClose();
            props.handleSubmit();
        }

        else {
            setFailure(true);
        }
    }
    const [quantity, setQuantity] = React.useState('');
    const [comments, setComments] = React.useState('');
    const [name, setName] = React.useState('');
    const [options, setOptions] = React.useState({});
    const [failure, setFailure] = React.useState(false);

    const onRadioChange = (event) => {
        props.info.options.map((option) => {
            if (event.target.name === option.name){
                options[option.name] = event.target.value;
            }
        })
    }

    const onTextChange = (event) => {
        setComments(event.target.value);
    }

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const onQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    return (
        <div>  
            <Modal open={props.open} onClose={props.handleClose} style={modal}>
                <div style={popup}>
                    <h2>{props.info.name}</h2>
                    <p>{props.info.description}</p>
                    {
                        props.info.options.map((option) => {
                            return(
                                <FormControl component="fieldset" style={radio}>
                                    <FormLabel component="legend">{option.name}</FormLabel>
                                    <RadioGroup aria-label={option.name} onChange={onRadioChange}>
                                        {
                                            option.values.map((entry, i) =>{
                                                return (
                                                    <FormControlLabel value={entry} name={option.name} control={<Radio />} label={entry}/>
                                                )
                                            })
                                        }
                                    </RadioGroup>
                                </FormControl>
                            )
                        })
                    }
                    <div style={textbox}>
                        <TextField
                            placeholder="Additional comments"
                            rows={5}
                            rowsMax={10}
                            onChange={onTextChange}
                        />
                    </div>
                    <div>
                        <TextField
                            placeholder="Name"
                            rows={5}
                            rowsMax={10}
                            onChange={onNameChange}
                        />
                    </div>
                    <div>
                    <FormControl style={select}>
                        <InputLabel>Quantity</InputLabel>
                        <Select value={quantity} onChange={onQuantityChange}>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                        </Select>
                    </FormControl>
                    </div>
                    <div style={buttons}>
                        <Button variant='outlined' style={button} onClick={props.handleClose}>Cancel</Button>
                        <Button variant='outlined' onClick={submitOrder}>Add to Cart</Button>
                    </div>
                    <div>
                        {failure ? <Alert severity="error">Please specify a quantity!</Alert>: null}
                    </div>
                </div>
            </Modal>
        </div> 
    );
}

const modal = {
    display: 'flex',
    //display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'auto',
    fontFamily: 'Segoe UI',
    padding: '2.5% 0%'
}

const popup = {
    position: 'absolute',
    backgroundColor: 'white',
    margin: 'auto',
    height: '75%',
    width: '75%',
    outline: 'none',
    //padding: '5%',
    padding: '2.5%',
    // paddingTop: '2.5%',
    // paddingBottom: '2.5%',
    // overflowY: 'auto',
    scrollPaddingTop: '200px',
    borderRadius: '20px',
    fontFamily: 'Segoe UI',
    fontSize: '18px',
    overflow: 'auto'
}

const radio = {
    paddingBottom: '2.5%',
    marginRight: '15%',
    fontFamily: 'Segoe UI',
}

const select = {
    marginTop: '20px',
    minWidth: '120'
}

const buttons = {
    marginTop: '2.5%'
}

const button = {
    marginRight: '2.5%'
}

const textbox = {
    paddingBottom: '20px'
}

export default PopUp;