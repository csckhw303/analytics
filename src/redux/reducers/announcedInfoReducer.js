import * as types from "../actions/actionTypes";
import initialState from "./initialState";
export default function announcedInfoReducer(
  state = initialState.announcedInfos,
  action
) {
  switch (action.type) {
    case types.LOAD_ANNOUNCEDINFO_SUCCESS:
      return action.announcedInfos;
    default:
      return state;
  }
}
