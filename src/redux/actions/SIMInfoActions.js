import * as SIMInfo from "../../api/SIMInfoApi";
import * as types from "./actionTypes";

export function loadSIMInfo() {
  // the dispatch will be provided by the thunk
  return function (dispatch) {
    return SIMInfo
      .getSIMInfo()
      .then((SIMInfos) => {
        console.log(SIMInfos);
        dispatch({ type: types.LOAD_SIMINFO_SUCCESS, SIMInfos });
      })
      .catch((error) => {
        throw error;
      });
  };
}