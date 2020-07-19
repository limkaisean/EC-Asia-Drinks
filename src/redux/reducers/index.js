import { combineReducers } from "redux";
import cart from "./cart";
import orders from "./orders";

export default combineReducers({ orders, cart });
