import { ADD_BEVERAGE, REDUCE_BEVERAGE, REMOVE_BEVERAGE, REMOVE_ALL_BEVERAGES } from './actionTypes';

/*
 * action creators
*/ 
export function addBeverage(id) {
    return { type: ADD_BEVERAGE, payload: id }
}

export function reduceBeverage(id) {
    return { type: REDUCE_BEVERAGE, payload: id }
}

export function removeBeverage(id) {
    return { type: REMOVE_BEVERAGE, payload: id }
}

export function removeAllBeverages() {
    return { type: REMOVE_ALL_BEVERAGES }
}
