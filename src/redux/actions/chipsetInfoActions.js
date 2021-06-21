import * as types from "./actionTypes";
import * as chipsetInfo from "../../api/chipsetInfoApi";

export function loadchipsetInfo() {
  // the dispatch will be provided by the thunk
  return function (dispatch) {
    return chipsetInfo
      .getchipsetInfo()
      .then((chipsetInfos) => {
        console.log(chipsetInfos);
        dispatch({ type: types.LOAD_CHIPSETINFO_SUCCESS, chipsetInfos });
      })
      .catch((error) => {
        throw error;
      });
  };
}
