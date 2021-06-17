import * as types from "./actionTypes";
import * as SearchFuncs from "../../api/searchApi";

export function search(criteria) {
  // the dispatch will be provided by the thunk
  return function (dispatch) {
    return SearchFuncs.getSearch(criteria)
      .then((searchResult) => {
        console.log(searchResult);
        dispatch({ type: types.SEARCHED_SUCCESS, searchResult });
      })
      .catch((error) => {
        throw error;
      });
  };
}
