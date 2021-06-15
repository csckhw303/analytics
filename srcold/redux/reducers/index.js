import { combineReducers } from "redux";
import announcedInfos from "./announcedInfoReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
  announcedInfos,
  authors,
});

export default rootReducer;
