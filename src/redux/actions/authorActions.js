import * as authorApi from "../../api/authorApi";
import { LOAD_AUTHORS_SUCCESS } from "./actionTypes";

export const loadAuthors = () => {
  return (dispatch) => {
    return authorApi
      .getAuthors()
      .then((authors) => dispatch({ type: LOAD_AUTHORS_SUCCESS, authors }))
      .catch((error) => console.log(error));
  };
};
