import { combineReducers } from "redux";
import announcedInfos from "./announcedInfoReducer";
import authors from "./authorReducer";
import twoGbandsInfos from "./2GbandsInfoReducer";
import searchResult from "./searchReducer";
import wlanInfos from "./wlanInfoReducer";
const rootReducer = combineReducers({
  announcedInfos,
  authors,
  twoGbandsInfos,
  searchResult,
  wlanInfos,
});

export default rootReducer;
