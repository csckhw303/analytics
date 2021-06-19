import * as types from "../actions/actionTypes";
import initialState from "./initialState";
export default function wlanInfoReducer(
  state = initialState.wlanInfos,
  action
) {
  switch (action.type) {
    case types.LOAD_WLANINFO_SUCCESS:
      return action.wlanInfos;
    default:
      return state;
  }
}
