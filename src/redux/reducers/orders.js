import { ADD_ORDER, REMOVE_ORDER } from "../actionTypes";

const initialState = {
  orders: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ORDER: {
      const { id, time, status } = action.payload;
       
      return {
        ...state,
        orders: {
          ...state.orders,
          [id]: {
            ...state.orders[id],
            time: time,
            status: status
          }
        }
      };
    }
    case REMOVE_ORDER: {
      const { id } = action.payload;
      const { [id]: value, ...without} = state.orders;
      return Object.assign({}, state, {
        byIds: without
      });
    }
    default:
      return state;
  }
}
