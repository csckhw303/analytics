import * as types from "../actions/actionTypes";
import initialState from "./initialState";
export default function chipsetInfooReducer(
  state = initialState.chipsetInfos,
  action
) {
  switch (action.type) {
    case types.LOAD_CHIPSETINFO_SUCCESS:
      return action.chipsetInfos;
    default:
      return state;
  }
}
