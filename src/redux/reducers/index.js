import { combineReducers } from "redux";
import announcedInfos from "./announcedInfoReducer";
import authors from "./authorReducer";
import twoGbandsInfos from "./2GbandsInfoReducer";
import SIMInfos from "./SIMInfoReducer";

const rootReducer = combineReducers({
  announcedInfos,
  authors,
  twoGbandsInfos,
  SIMInfos,
});

export default rootReducer;
