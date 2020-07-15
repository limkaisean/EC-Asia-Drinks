import { combineReducers } from "redux";
import cartBeverages from "./cart";
import orderBeverages from "./orders";

export default combineReducers({ orderBeverages, cartBeverages });
