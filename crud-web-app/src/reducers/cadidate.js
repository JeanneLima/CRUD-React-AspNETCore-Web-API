//Reducers have API calls
import { ACTION_TYPES } from "./../actions/candidate";

const initialState = {
  list: [],
};

export const Candidate = (state = initialState, action) => {
  switch (action.type) {
    //GET Reducer
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        list: [...action.payload],
      };

    default:
      return state;
  }
};
