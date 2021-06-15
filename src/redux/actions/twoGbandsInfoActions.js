import * as types from "./actionTypes";
import * as twoGbandsInfo from "../../api/2GbandsInfoApi";

export function loadtwoGbandsInfo() {
  // the dispatch will be provided by the thunk
  return function (dispatch) {
    return twoGbandsInfo
      .get2GbandsInfo()
      .then((twoGbandsInfos) => {
        console.log(twoGbandsInfos);
        dispatch({ type: types.LOAD_TWOGBANDSINFO_SUCCESS, twoGbandsInfos });
      })
      .catch((error) => {
        throw error;
      });
  };
}
