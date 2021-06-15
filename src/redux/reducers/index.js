import { combineReducers } from "redux";
import announcedInfos from "./announcedInfoReducer";
import authors from "./authorReducer";
import twoGbandsInfos from "./2GbandsInfoReducer";

const rootReducer = combineReducers({
  announcedInfos,
  authors,
  twoGbandsInfos,
});

export default rootReducer;
