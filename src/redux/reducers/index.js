import { combineReducers } from "redux";
import announcedInfos from "./announcedInfoReducer";
import authors from "./authorReducer";
import twoGbandsInfos from "./2GbandsInfoReducer";
import searchResult from "./searchReducer";
import wlanInfos from "./wlanInfoReducer";
import SIMInfos from "./SIMInfoReducer";
const rootReducer = combineReducers({
  announcedInfos,
  authors,
  twoGbandsInfos,
  searchResult,
  wlanInfos,
  SIMInfos,
});

export default rootReducer;
