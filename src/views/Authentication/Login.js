import React from 'react';
import { Link, Redirect } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useAuth } from './auth';

function Login(props) {

    const [loggedIn, setLoggedIn] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const isAuthenticated = useAuth();

    const handleLogin = () => {
        console.log(username);
        console.log(password);
        setLoggedIn(true);
    }

    const onUsernameChange = (event) => {
        setUsername(event.target.value);
    } 

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    if (loggedIn) {

        return <Redirect to="/barista" />;
    }

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
            <TextField required id="standard-required" label="Username:" defaultValue="" style={text} onChange={onUsernameChange}/>
            <br/>
            <TextField
            id="standard-password-input"
            label="Password:"
            type="password"
            autoComplete="current-password"
            style={text}
            onChange={onPasswordChange}
            />
            <br/>
            <Button variant="contained" color="primary" style={button} onClick={handleLogin}>
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