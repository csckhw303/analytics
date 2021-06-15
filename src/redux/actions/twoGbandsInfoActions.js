import * as types from "./actionTypes";
import * as twoGbandInfo from "../../api/2GbandsInfoApi";

export function loadtwoGbandsInfo() {
  // the dispatch will be provided by the thunk
  return function (dispatch) {
    return twoGbandInfo
      .get2GbandsInfo()
      .then((twoGbandInfos) => {
        console.log(twoGbandInfos);
        dispatch({ type: types.LOAD_TWOGBANDSINFO_SUCCESS, twoGbandInfos });
      })
      .catch((error) => {
        throw error;
      });
  };
}
