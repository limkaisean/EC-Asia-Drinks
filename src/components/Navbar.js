import React from "react";
import { Link } from "react-router-dom";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const routeText = {
  "/": 'Beverages',
  "/checkout": "Checkout",
  "/orders": "Orders",
  "/barista": "Barista" 
};

const routes = Object.keys(routeText).map((route, index) => (
  <ListItem button key={route}>
      <Link to={route}>{routeText[route]}</Link>
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
