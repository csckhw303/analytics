import * as types from "./actionTypes";
import * as announcedInfo from "../../api/announcedInfoApi";

export function loadAnnouncedInfo() {
  // the dispatch will be provided by the thunk
  return function (dispatch) {
    return announcedInfo
      .getAnnouncedInfo()
      .then((announcedInfos) => {
        console.log(announcedInfos);
        dispatch({ type: types.LOAD_ANNOUNCEDINFO_SUCCESS, announcedInfos });
      })
      .catch((error) => {
        throw error;
      });
  };
}
