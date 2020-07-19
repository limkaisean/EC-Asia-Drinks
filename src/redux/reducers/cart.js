import _ from 'underscore'; 

import { ADD_BEVERAGE, INCREMENT_BEVERAGE, REDUCE_BEVERAGE, REMOVE_BEVERAGE, REMOVE_ALL_BEVERAGES } from "../actionTypes";

const initialState = {
  beverages: {}
};


let globalId = 0;

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_BEVERAGE: {
      const beverage = Object.assign({}, action.payload);
      const newQuantity = beverage.quantity;
    
      const beverageExists = Object.keys(state.beverages)
        .filter(k => {
          const otherBeverage = state.beverages[k];
          // set the quantity to be identical as it is not a factor in determining if two beverage orders are the same
          beverage.quantity = otherBeverage.quantity; 
          return _.isEqual(beverage, otherBeverage);
        });
      beverage.quantity = newQuantity;
      
      let id;
      if (beverageExists.length > 0) {
        id = beverageExists[0];
        beverage.quantity += state.beverages[id].quantity;
      } else {
        id = globalId;
        globalId++;
      }

      return {
        ...state,
        beverages: {
          ...state.beverages,
          [id]: beverage
        }
      };
    }
    case INCREMENT_BEVERAGE: {
      const { id } = action.payload;
      const currentQuantity = state.beverages[id] ? state.beverages[id].quantity : 0;
      
      return {
        ...state,
        beverages: {
          ...state.beverages,
          [id]: {
            ...state.beverages[id],
            quantity: currentQuantity + 1,
          }
        }
      };
    }
    case REDUCE_BEVERAGE: {
      const { id } = action.payload;
      const currentQuantity = state.beverages[id] ? state.beverages[id].quantity : 0;
      if (currentQuantity === 0) return state;
      if (currentQuantity === 1) {
        const { [id]: value, ...without} = state.beverages;
        return Object.assign({}, state, {
          beverages: without
        });
      }

      return {
        ...state,
        beverages: {
          ...state.beverages,
          [id]: {
            ...state.beverages[id],
            quantity: currentQuantity - 1
          }
        }
      };
    }
    case REMOVE_BEVERAGE: {
      const { id } = action.payload;
      const { [id]: value, ...without} = state.beverages;
      return Object.assign({}, state, {
        beverages: without
      });
    }
    case REMOVE_ALL_BEVERAGES: {
      return Object.assign({}, state, {
        beverages: {}
      });
    } 
    default:
      return state;
  }
}
