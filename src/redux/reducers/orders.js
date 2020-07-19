import { ADD_ORDER, REMOVE_ORDER } from "../actionTypes";

const initialState = {
  beverages: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ORDER: {
      const { id, time, status } = action.payload;
       
      return {
        ...state,
        beverages: {
          ...state.beverages,
          [id]: {
            ...state.beverages[id],
            time: time,
            status: status
          }
        }
      };
    }
    case REMOVE_ORDER: {
      const { id } = action.payload;
      const { [id]: value, ...without} = state.beverages;
      return Object.assign({}, state, {
        beverages: without
      });
    }
    default:
      return state;
  }
}
