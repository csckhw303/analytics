import { SEARCHED_SUCCESS } from "../actions/actionTypes";
import initialState from "./initialState";
const searchReducer = (state = initialState.searchResult, action) => {
  switch (action.type) {
    case SEARCHED_SUCCESS:
      return action.searchResult;

    default:
      return state;
  }
};

export default searchReducer;
