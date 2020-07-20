import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function PopUp(props){
    return (
        <div>  
            <Modal open={props.open} onClose={props.handleClose} style={modal}>
                <div style={popup}>
                    <h2>{props.info.name}</h2>
                    <p>{props.info.description}</p>
                    {
                        props.info.options.map((option) => {
                            return(
                                <div>
                                    <FormControl component="fieldset" style={radio}>
                                        <FormLabel component="legend">{option.name}</FormLabel>
                                        <RadioGroup aria-label={option.name}>
                                            {
                                                option.values.map((entry, i) =>{
                                                    return (
                                                        <FormControlLabel value={entry} control={<Radio />} label={entry} />
                                                    )
                                                })
                                            }
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            )
                        })
                    }
                    <TextField
                        placeholder="Additional comments"
                        rows={5}
                        rowsMax={10}
                    />
                    <div style={buttons}>
                        <Button variant='outlined' style={button} onClick={props.handleClose}>Cancel</Button>
                        <Button variant='outlined'>Add to Cart</Button>
                    </div>
                </div>
            </Modal>
        </div> 
    );
}

const modal = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    fontFamily: 'Lato',
}

const popup = {
    position: 'absolute',
    backgroundColor: 'white',
    margin: 'auto',
    height: '70%',
    width: '75%',
    outline: 'none',
    padding: '2.5% 5%',
    borderRadius: '20px',
    overflow: 'scroll',
    fontFamily: 'Lato',
    fontSize: '20px'
}

const radio = {
    paddingBottom: '2.5%',
    fontFamily: 'Lato',
}

const buttons = {
    marginTop: '2.5%'
}

const button = {
    marginRight: '2.5%'
}

export default PopUp;