import React from "react";
import { Link } from "react-router-dom";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

/* CSS */

const link = {
  paddingTop: '10px',
  paddingBottom: '10px',
  textDecoration: 'none',
  textAlign: 'center',
  fontFamily: 'Segoe UI',
  fontWeight: 'normal',
  fontSize: '25px',
  color: '#27496D',
  marginLeft: 'auto',
  marginRight: 'auto',
}

const routeText = {
  "/": 'Beverages',
  "/checkout": "Checkout",
  "/orders": "Orders",
};

const routes = Object.keys(routeText).map((route, index) => (
  <ListItem button key={route}>
      <Link style={link} to={route}>{routeText[route]}</Link>
  </ListItem>
));

function Navbar() {
  return (
    <div>
      <List>
        {routes}
      </List>
    </div>
  );
};



export default Navbar;
