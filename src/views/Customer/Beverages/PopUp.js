import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

function PopUp(){
    return (
        <div style={popup}>  
            <div>  
                <h1>Hey!</h1> 
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1">
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                    </RadioGroup>
                </FormControl> 
                {/* <button onClick={this.props.closePopup}>close me</button>   */}
            </div>  
        </div> 
    );
}

const popup = {  
    position: 'fixed',  
    width: '50%',
    height: '70%',  
    top: '0',
    left: '0',  
    right: '0',  
    bottom: '0',  
    margin: 'auto',  
    borderRadius: '20px',
    backgroundColor: 'white' 
};  
// const popup_inner = {  
//     position: 'absolute',  
//     left: '25%',
//     right: '25%',  
//     top: '25%',
//     bottom: '25%',  
//     margin: 'auto',  
//     borderRadius: '100px',  
//     background: 'white'  
// };

export default PopUp;