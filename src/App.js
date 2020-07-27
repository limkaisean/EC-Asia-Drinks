import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store';
import './App.css';
import Beverages from './views/Customer/Beverages/Beverages';
import Checkout from './views/Customer/Checkout/Checkout';
import CustomerOrders from './views/Customer/Orders/Orders';
import BaristaOrders from './views/Barista/Orders';

const Endpoint = process.env.NODE_ENV === 'development' ? 
  'http://127.0.0.1:5000' : 'https://ec-asia-app.azurewebsites.net/';

function App() {
  const [websocket, setWebsocket] = useState(null);

  useEffect(() => {
    setWebsocket(socketIOClient(Endpoint));
    if (!websocket) return;

    websocket.on('connected', data => {
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
            <Switch>
              <Provider store={store}>
                <Route path="/" render={props => <Beverages websocket={websocket} />} exact />
                <Route path="/beverages" render={props => <Beverages websocket={websocket} />} />
                <Route path="/checkout" render={props => <Checkout websocket={websocket} />} />
                <Route path="/orders" render={props => <CustomerOrders websocket={websocket} />} />
                <Route path="/barista" render={props => <BaristaOrders websocket={websocket} />} />
              </Provider>
            </Switch>
          </BrowserRouter>
        </main>
      </div>
  );
}

export default App;
