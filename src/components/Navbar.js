import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Beverages</Link>
      <Link to="/checkout">Cart</Link>
      <Link to="/orders">Orders</Link>
    </div>
  );
};

export default Navbar;
