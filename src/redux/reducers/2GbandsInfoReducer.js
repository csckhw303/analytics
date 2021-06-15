import * as types from "../actions/actionTypes";
import initialState from "./initialState";
export default function twoGbandsInfoReducer(
  state = initialState.twoGbandsInfos,
  action
) {
  switch (action.type) {
    case types.LOAD_TWOGBANDSINFO_SUCCESS:
      return action.twoGbandsInfos;
    default:
      return state;
  }
}
