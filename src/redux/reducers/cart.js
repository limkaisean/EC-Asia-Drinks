import { ADD_BEVERAGE, REDUCE_BEVERAGE, REMOVE_BEVERAGE, REMOVE_ALL_BEVERAGES } from "../actionTypes";

const initialState = {
  cartBeverages: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_BEVERAGE: {
      const { id } = action.payload;
      console.log(id, 'uid');
      const currentQuantity = state.cartBeverages[id] ? state.cartBeverages[id].quantity : 0;
       
      return {
        ...state,
        byIds: {
          ...state.cartBeverages,
          [id]: {
            ...state.cartBeverages[id],
            quantity: currentQuantity + 1
          }
        }
      };
    }
    case REDUCE_BEVERAGE: {
      const { id } = action.payload;
      const currentQuantity = state.cartBeverages[id] ? state.cartBeverages[id].quantity : 0;
      if (currentQuantity === 0) return state;
      if (currentQuantity === 1) {
        const { [id]: value, ...without} = state.cartBeverages;
        return Object.assign({}, state, {
          byIds: without
        });
      }

      return {
        ...state,
        byIds: {
          ...state.cartBeverages,
          [id]: {
            ...state.cartBeverages[id],
            quantity: currentQuantity - 1
          }
        }
      };
    }
    case REMOVE_BEVERAGE: {
      const { id } = action.payload;
      const { [id]: value, ...without} = state.cartBeverages;
      return Object.assign({}, state, {
        byIds: without
      });
    }
    case REMOVE_ALL_BEVERAGES: {
      return Object.assign({}, state, {
        byIds: {}
      });
    } 
    default:
      return state;
  }
}
