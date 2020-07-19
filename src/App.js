import React, { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store';
import './App.css';
import Beverages from './views/Customer/Beverages/Beverages';
import Checkout from './views/Customer/Checkout/Checkout';
import Orders from './views/Customer/Orders/Orders';
import Navbar from "./components/Navbar";

const Endpoint = process.env.NODE_ENV === 'development' ? 
  'http://127.0.0.1:5000' : 'https://ec-asia-app.azurewebsites.net:5000/';

console.log()

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
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Provider store={store}>
              <Route path="/" render={props => <Beverages websocket={websocket} />} exact />
              <Route path="/beverages" render={props => <Beverages websocket={websocket} />} />
              <Route path="/checkout" render={props => <Checkout websocket={websocket} />} />
              <Route path="/orders" render={props => <Orders websocket={websocket} />} />
            </Provider>
          </Switch>
        </BrowserRouter>
        </main>
      </div>
  );
}

export default App;
