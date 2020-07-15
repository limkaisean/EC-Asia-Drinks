import React, { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import { Route, Switch  } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store';
import './App.css';
import Beverages from './views/Customer/Beverages/Beverages';
import Checkout from './views/Customer/Checkout/Checkout';
import Orders from './views/Customer/Orders/Orders';
import Navbar from "./components/Navbar";

const Endpoint = 'http://127.0.0.1:5000';

function App() {
  const [websocket, setWebsocket] = useState(null);

  useEffect(() => {
    setWebsocket(socketIOClient(Endpoint));
    if (!websocket) return;

    websocket.on('connect', data => {
      console.log(data);
    });

    return () => {
      websocket.close();
    };
  }, []);
  
  return (
      <div className="App">
        <main>
          {/* <Navbar /> */}
          <Switch>
            <Provider store={store}>
              <Route path="/" render={props => <Beverages websocket={websocket} />} exact />
              <Route path="/beverages" render={props => <Beverages websocket={websocket} />} />
              <Route path="/checkout" render={props => <Checkout websocket={websocket} />} />
              <Route path="/orders" render={props => <Orders websocket={websocket} />} />
            </Provider>
          </Switch>
        </main>
      </div>
  );
}

export default App;
