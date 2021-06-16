import { combineReducers } from "redux";
import announcedInfos from "./announcedInfoReducer";
import authors from "./authorReducer";
import twoGbandsInfos from "./2GbandsInfoReducer";
import SIMInfos from "./SIMInfoReducer";
import wlanInfos from "./wlanInfoReducer";

const rootReducer = combineReducers({
  announcedInfos,
  authors,
  twoGbandsInfos,
  SIMInfos,
  wlanInfos,
});

export default rootReducer;
