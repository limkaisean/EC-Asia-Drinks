import React from 'react';
import { Link } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Login(props) {
    return(
        <div>
            <div style={backContainer}>
                <Link to="/">
                    <Button style={backButton}>
                        Go Back
                    </Button>
                </Link>
            </div>
            <h1>Barista Login</h1>
            <TextField required id="standard-required" label="Username:" defaultValue="" style={text}/>
            <br/>
            <TextField
            id="standard-password-input"
            label="Password:"
            type="password"
            autoComplete="current-password"
            style={text}
            />
            <br/>
            <Button variant="contained" color="primary" style={button}>
                Log In
            </Button>
        </div>
    )
};

const text = {
    padding: '20px 0px',
}

const button = {
    textTransform: 'none',
    fontSize: '16px'
}

const backContainer = {
    textAlign: 'right',
    marginRight: '40px'
};

const backButton = {
    textTransform: 'none',
    border: 'none',
    fontFamily: 'Helvetica',
    fontSize: '18px',
}

export default Login;