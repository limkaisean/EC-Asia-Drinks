import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './auth';

function PrivateRoute({component: Component, websocket: websocket, ...rest}) {
    const isAuthenticated = useAuth();

    return (
        <Route {...rest} render={(props) => (
            isAuthenticated ? (
                <Component websocket={websocket}/>
            ) : (
                <Redirect to="/Login"/>
            )
        )}
        />
    );
}

export default PrivateRoute;