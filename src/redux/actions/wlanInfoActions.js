import * as types from "./actionTypes";
import * as wlanInfo from "../../api/wlanInfoApi";

export function loadwlanInfo() {
  // the dispatch will be provided by the thunk
  return function (dispatch) {
    return wlanInfo
      .getwlanInfo()
      .then((wlanInfos) => {
        console.log(wlanInfos);
        dispatch({ type: types.LOAD_WLANINFO_SUCCESS, wlanInfos });
      })
      .catch((error) => {
        throw error;
      });
  };
}
