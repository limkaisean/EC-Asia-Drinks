import { ADD_BEVERAGE, INCREMENT_BEVERAGE, REDUCE_BEVERAGE, REMOVE_BEVERAGE, REMOVE_ALL_BEVERAGES } from "../actionTypes";

const initialState = {
  beverages: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_BEVERAGE: {
      const { name, quantity, optionValues } = action.payload;

      const id = Object.keys(state.beverages).length;
      const stateCopy = Object.assign({}, state);
      
      return {
        ...stateCopy,
        beverages: {
          ...stateCopy.beverages,
          [id]: {
            name: name,
            quantity: quantity,
            optionValues: { ...optionValues }
          }
        }
      };
    }
    case INCREMENT_BEVERAGE: {
      const { id } = action.payload;
      console.log(id, 'uid');
      const currentQuantity = state.beverages[id] ? state.beverages[id].quantity : 0;
      
      const stateCopy = Object.assign({}, state);

      return {
        ...stateCopy,
        beverages: {
          ...stateCopy.beverages,
          [id]: {
            ...stateCopy.beverages[id],
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
