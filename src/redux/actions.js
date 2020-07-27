import { ADD_BEVERAGE, INCREMENT_BEVERAGE, REDUCE_BEVERAGE, REMOVE_BEVERAGE, REMOVE_ALL_BEVERAGES, SET_MEETING_ROOM } from './actionTypes';

/*
 * action creators
*/ 
export function addBeverage(info) {
    return { type: ADD_BEVERAGE, payload: info }
}

export function incrementBeverage(id) {
    return { type: INCREMENT_BEVERAGE, payload: id }
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

export function setMeetingRoom(newRoom) {
    return { type: SET_MEETING_ROOM, payload: newRoom }
}
