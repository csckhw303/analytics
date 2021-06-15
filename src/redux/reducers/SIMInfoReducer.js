import * as types from "../actions/actionTypes";
import initialState from "./initialState";
export default function SIMInfoReducer(
  state = initialState.SIMInfos,
  action
) {
  switch (action.type) {
    case types.LOAD_SIMINFO_SUCCESS:
      return action.SIMInfos;
    default:
      return state;
  }
}
